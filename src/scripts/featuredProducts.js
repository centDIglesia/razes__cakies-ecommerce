// const apiUrl = 'https://localhost:7078/api/Featured';
// const section = document.getElementById("featuredProductsSection");

// export async function getFeaturedProducts() {
//     try {
//         const res = await fetch(apiUrl);

//         if (!res.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await res.json();
//         console.log(data);

//         // Clear the section before adding new content
//         section.innerHTML = '';

//         // Create dynamic elementss, pakiayos na lang to vincent based sa design mo
//         // naka dynamic e keri mo an yan XD
//         data.forEach(item => {
//             // Create a container for each featured product
//             const container = document.createElement('div');

//             // Generate images
//             const firstImage = document.createElement('img');
//             firstImage.src = `data:image/jpeg;base64,${item.firstImage}`;
//             firstImage.alt = 'First Image';
//             container.appendChild(firstImage);

//             const secondImage = document.createElement('img');
//             secondImage.src = `data:image/jpeg;base64,${item.secondImage}`;
//             secondImage.alt = 'Second Image';
//             container.appendChild(secondImage);

//             const thirdImage = document.createElement('img');
//             thirdImage.src = `data:image/jpeg;base64,${item.thirdImage}`;
//             thirdImage.alt = 'Third Image';
//             container.appendChild(thirdImage);

//             // Title
//             const title = document.createElement('h6');
//             title.textContent = item.title;
//             container.appendChild(title);

//             // DEscription
//             const description = document.createElement('p');
//             description.textContent = item.description;
//             container.appendChild(description);

//             // Price
//             const price = document.createElement('p');
//             price.textContent = item.price;
//             container.appendChild(price);

//             // Append the container to the section
//             section.appendChild(container);
//         });
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }