const apiUrl = 'https://localhost:7078/api/CakiesApp';

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
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        alert("Passwords do not match.");

        // Remove password contents
        pwSignUp.value = "";
        cPwSignUp.value = "";
    }
}