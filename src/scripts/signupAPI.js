const apiUrl = 'https://localhost:7078/api/User/register';

const unSignUp = document.getElementById("unSignUp");
const emailSignUp = document.getElementById("emailSignUp");
const pwSignUp = document.getElementById("pwSignUp");
const cPwSignUp = document.getElementById("cPwSignUp");

export async function signup() {
    const userName = unSignUp.value;
    const email = emailSignUp.value;
    const password = pwSignUp.value;
    const confirmPassword = cPwSignUp.value;

    // If passwords matched, try saving the values to the db using api
    if (password === confirmPassword) {
        const newUser = {
            userID: 0,
            userName: userName,
            email: email,
            password: password
        };

        try {
            const response = await fetch(apiUrl, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                if (response.status === 400) {
                    alert("Email already exist.");
                }
                if (response.status === 500) {
                    throw new Error('Internal server error: Please try again later');
                } else {
                    const errorMessage = await response.text();
                    throw new Error(errorMessage || 'Login failed');
                }
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            alert("Registered Successfully!")
        } catch (error) {
            console.error('Error:', error);
        } finally {
            unSignUp.value = '';
            emailSignUp.value = '';
            pwSignUp.value = '';
            cPwSignUp.value = '';
        }
    } else {
        alert("Passwords do not match.");
        // Remove password contents
        pwSignUp.value = "";
        cPwSignUp.value = "";
    }
}