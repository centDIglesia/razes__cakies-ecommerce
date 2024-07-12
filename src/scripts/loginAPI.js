const apiUrlLogin = 'https://localhost:7078/api/User/login';

export async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const user = {
            userName: "string",
            email: email,
            password: password
        };

        const response = await fetch(apiUrlLogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage || 'Login failed');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        alert("Logged in successful");
    } catch (error) {
        console.error('Error:', error);
        alert("Invalid Credentials");
    }
    finally {
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
    }
}
