// const apiUrlLogin = 'https://localhost:7078/api/Email/send';

// async function sendEmail() {
//     const fullname = document.getElementById('contactFn').value;
//     const email = document.getElementById('contactEmail').value;
//     const message = document.getElementById('contactMsg').value;

//     try {
//         const msg = {
//             // Add placeholder here coz email at pass lang need
//             email: email,
//             subject: fullname,
//             message: message
//         };

//         const response = await fetch(apiUrlLogin, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(msg)
//         });

//         if (!response.ok) {
//             const errorMessage = await response.text();
//             throw new Error(errorMessage || 'Login failed');
//         }

//         const data = await response.json();
//         console.log(data);

//         alert("Sent Successfully!");
//     } catch (error) {
//         console.error('Error:', error);
//         alert("There is an error while sending.");
//     }
//     finally {
//         document.getElementById('contactFn').value = '';
//         document.getElementById('contactEmail').value = '';
//         document.getElementById('contactMsg').value = '';
//     }
// }

// const mail = document.getElementById("submit-mail");
// if (mail) {
//     mail.addEventListener("submit", async (event) => {
//     event.preventDefault();
//     await sendEmail();
//   });
// } else {
//   console.error("There is an error while sending.");
// }