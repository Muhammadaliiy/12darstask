import { createSlice } from '@reduxjs/toolkit';
import { localStorageUtils } from '../utils/localStorage';

// Initial state
const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorageUtils.getCart();
    if (savedCart.length > 0) {
      const totalItems = savedCart.reduce((total, item) => total + item.quantity, 0);
      const totalPrice = savedCart.reduce((total, item) => total + (item.price * item.quantity), 0);
      return {
        items: savedCart,
        totalItems,
        totalPrice
      };
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
  }
  return initialState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromStorage(),
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      
      // Recalculate totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      
      // Save to localStorage
      localStorageUtils.saveCart(state.items);
    },

    updateQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      
      if (newQuantity <= 0) {
        // Remove item if quantity is 0 or less
        state.items = state.items.filter(item => item.id !== productId);
      } else {
        const item = state.items.find(item => item.id === productId);
        if (item) {
          item.quantity = newQuantity;
        }
      }
      
      // Recalculate totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      
      // Save to localStorage
      localStorageUtils.saveCart(state.items);
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
      
      // Recalculate totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      
      // Save to localStorage
      localStorageUtils.saveCart(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
      
      // Clear localStorage
      localStorageUtils.clearCart();
    },

    loadCartFromLocalStorage: (state) => {
      const savedCart = localStorageUtils.getCart();
      if (savedCart.length > 0) {
        state.items = savedCart;
        state.totalItems = savedCart.reduce((total, item) => total + item.quantity, 0);
        state.totalPrice = savedCart.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    }
  }
});

// Action creators
export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart,
  loadCartFromLocalStorage
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectTotalItems = (state) => state.cart.totalItems;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export const selectItemQuantity = (productId) => (state) => {
  const item = state.cart.items.find(item => item.id === productId);
  return item ? item.quantity : 0;
};

export default cartSlice.reducer;