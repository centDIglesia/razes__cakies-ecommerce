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
        const decodedToken = parseJwt(data.token);
        // console.log('Decoded Token:', decodedToken); 

        const emailClaim = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress';
        const emailFromApi = decodedToken[emailClaim];
        const firstName = decodedToken.firstName || 'Unknown';
        const lastName = decodedToken.lastName || 'Unknown';

        const currentUser = {
            userEmail: emailFromApi,
            userFN: firstName,
            userLN: lastName
        };
        // Save the user to the local storage
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        console.log(localStorage.getItem("currentUser"));
        alert("Logged in successful");
    } catch (error) {
        console.error('Error:', error);
        alert("Invalid Credentials");
    } finally {
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
    }
}

// function to parse the jwt token sent from the api
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
