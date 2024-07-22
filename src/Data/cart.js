import LZString from 'lz-string';

let cart = [];

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

// Function to remove an item from the cart by ID
export function removeFromCartById(itemId) {
  const index = cart.findIndex(item => item.id === itemId);
  if (index !== -1) {
    cart.splice(index, 1);
    saveCartToLocalStorage(cart);
  }
}

// Export the cart
export { cart };