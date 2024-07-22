import LZString from 'lz-string';


export let cart = [];

// Function to get the cart from local storage
export function getCartFromLocalStorage() {
  const compressedCart = localStorage.getItem('cart');
  if (compressedCart) {
    const decompressedCart = LZString.decompress(compressedCart);
    try {
      const cartP = JSON.parse(decompressedCart);
      return Array.isArray(cartP) ? cartP : [];
    } catch (error) {
      console.error('Error parsing cart data:', error);
      return [];
    }
  }
  return [];
}

// Initialize cart
document.addEventListener("DOMContentLoaded", () => {
  cart = getCartFromLocalStorage();
});

// Function to save the cart to local storage
export function saveCartToLocalStorage(cart) {
  try {
    const compressedCart = LZString.compress(JSON.stringify(cart));
    localStorage.setItem('cart', compressedCart);
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      console.error('LocalStorage quota exceeded.');
    } else {
      console.error('Error saving cart to localStorage', e);
    }
  }
}

// export function deleteFromCart(productId) {
//   let compressedCart = localStorage.getItem('cart');
//   const decompressedCart = LZString.decompress(compressedCart);
//   const cart = JSON.parse(decompressedCart);

//   if (cart) {
//       const index = cart.findIndex(item => item.productId === productId);
      
//       if (index !== -1) {
//           cart.splice(index, 1);

//           const recompressedCart = LZString.compress(JSON.stringify(cart));
//           localStorage.setItem('cart', recompressedCart);

//           console.log(`Item with productId ${productId} removed from the cart.`);
//       } else {
//           console.log(`Item with productId ${productId} not found in the cart.`);
//       }
//   } else {
//       console.log('Cart is empty or does not exist.');
//   }
// }