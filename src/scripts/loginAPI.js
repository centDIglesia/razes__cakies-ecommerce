const apiUrlLogin = 'https://localhost:7078/api/User/login';

export async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const user = {
            // Add placeholder here coz email at pass lang need
            firstName: "string",
            lastName: "string",
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
        console.log(data.token);

        updateButtonVisibility();
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

// export function updateButtonVisibility() {
//     console.log('Updating button visibility');
//     const loginBtns = document.getElementsByClassName('log__in');
//     const logoutBtns = document.getElementsByClassName('log__out');

//     if (localStorage.getItem('token') !== null) {
//         for (let i = 0; i < loginBtns.length; i++) {
//             loginBtns[i].style.display = 'none';
//         }
//         for (let i = 0; i < logoutBtns.length; i++) {
//             logoutBtns[i].style.display = 'block';
//         }
//     } else {
//         for (let i = 0; i < loginBtns.length; i++) {
//             loginBtns[i].style.display = 'block';
//         }
//         for (let i = 0; i < logoutBtns.length; i++) {
//             logoutBtns[i].style.display = 'none';
//         }
//     }
// }