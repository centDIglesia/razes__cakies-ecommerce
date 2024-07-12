
/*

const apiUrl = 'https://localhost:7078/api/Featured';

export let featuredProductsData = []; 

export async function getFeaturedProducts() {
    try {
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await res.json();
        featuredProductsData = data; // Store the data in the array
        console.log(featuredProductsData); 
    }
    catch (error) {
        console.error('Error:', error);
    }
}


*/ 


export const featuredProductsData = [
  {
    id: "1",
    firstImage: "../../public/images/featuredProductsIMG/featuredimg__1-1.png",
    secondImage: "../../public/images/featuredProductsIMG/featuredimg__1-2.png",
    thirdImage: "../../public/images/featuredProductsIMG/featuredimg__1-3.png",
    title: "Berry Delight Cake",
    price: 290,
    description: "Delightful cherry cake with a burst of flavor.",
  },
  {
    id: "2",
    firstImage: "../../public/images/featuredProductsIMG/featuredimg__2-1.png",
    secondImage: "../../public/images/featuredProductsIMG/featuredimg__2-2.png",
    thirdImage: "../../public/images/featuredProductsIMG/featuredimg__2-3.png",
    title: "Choco Delight Cupcakes",
    price: 6490,
    description: "Delightful cherry cake with a burst of flavor.",
  },
  {
    id: "3",
    firstImage: ".../../public/images/featuredProductsIMG/featuredimg__3-1.png",
    secondImage: "../../public/images/featuredProductsIMG/featuredimg__3-2.png",
    thirdImage: "../../public/images/featuredProductsIMG/featuredimg__3-3.png",
    title: "Cherry Delight Cookies",
    price: 2470,
    description: "Delightful cherry cake with a burst of flavor.",
  },
];
