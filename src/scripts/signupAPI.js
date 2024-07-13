const apiUrl = 'https://localhost:7078/api/User/register';

export async function signup() {
    // Modify ko tong unsignup, gawin kong firstname at lastname yung request
    // bale, lagyan mo na lang input na may ganitong id
    const firstname = document.getElementById("fnSignUp").value; // ito dinagdag
    const lastname = document.getElementById("lnSignUp").value; // saka ito
    const emailSignUp = document.getElementById("emailSignUp").value;
    const pwSignUp = document.getElementById("pwSignUp").value;
    const cPwSignUp = document.getElementById("cPwSignUp").value;

    // If passwords matched, create new user object and then
    // try to save it to the database using api
    if (pwSignUp === cPwSignUp) {
        const newUser = {
            userID: 0,
            firstName: firstname,
            lastName: lastname,
            email: emailSignUp,
            password: pwSignUp
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
            // localStorage.setItem('token', data.token);
            alert("Registered Successfully!")
        } catch (error) {
            console.error('Error:', error);
        } finally {
            firstname.value = '';
            lastname.value = '';
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