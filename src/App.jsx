import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProducts, selectProductsLoading, selectProductsError } from './features/productsSlice';
import { 
  selectCartItems, 
  selectTotalItems, 
  selectTotalPrice,
  selectItemQuantity,
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart
} from './features/cartSlice';
import {
  selectIsOrderConfirmationOpen,
  openOrderConfirmation,
  closeOrderConfirmation
} from './features/modalSlice';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderConfirmationModal from './components/OrderConfirmationModal';
import './App.css';

function App() {
  const dispatch = useDispatch();
  
  // Selectors
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);
  const showModal = useSelector(selectIsOrderConfirmationOpen);

  // Load products on component mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Event handlers
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    dispatch(updateQuantity({ productId, newQuantity }));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleConfirmOrder = () => {
    dispatch(openOrderConfirmation());
  };

  const handleStartNewOrder = () => {
    dispatch(clearCart());
    dispatch(closeOrderConfirmation());
  };

  const handleCloseModal = () => {
    dispatch(closeOrderConfirmation());
  };

  const getItemQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  if (loading) {
    return (
      <div className="app">
        <div className="loading">
          <p>Loading delicious desserts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <div className="error">
          <p>{error}</p>
          <button onClick={() => dispatch(fetchProducts())}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        <main className="main-content">
          <ProductList
            products={products}
            onAddToCart={handleAddToCart}
            getItemQuantity={getItemQuantity}
            onUpdateQuantity={handleUpdateQuantity}
          />
        </main>
        
        <aside className="sidebar">
          <Cart
            cartItems={cartItems}
            totalItems={totalItems}
            totalPrice={totalPrice}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveFromCart}
            onConfirmOrder={handleConfirmOrder}
          />
        </aside>
      </div>

      <OrderConfirmationModal
        isOpen={showModal}
        cartItems={cartItems}
        totalPrice={totalPrice}
        onStartNewOrder={handleStartNewOrder}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
