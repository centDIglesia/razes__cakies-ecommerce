const apiUrl = 'https://localhost:7078/api/Featured';

export async function getFeaturedProducts() {
    try {
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        // Access the data here for featured products
        const data = await res.json();
        console.log(data);
    }
    catch (error) {
        console.error('Error:', error);
    }
}