import React from 'react';

const OrderConfirmationModal = ({ isOpen, cartItems, totalPrice, onStartNewOrder, onClose }) => {
  if (!isOpen) return null;

  // Enhanced image path handling to work with API paths and user uploads
  const getImageSrc = (imagePath) => {
    if (!imagePath) return '/images/placeholder.jpg';
    
    // If path starts with '../images/', convert to '/images/'
    if (imagePath.startsWith('../images/')) {
      return imagePath.replace('../images/', '/images/');
    }
    
    // If path starts with './images/', convert to '/images/'
    if (imagePath.startsWith('./images/')) {
      return imagePath.replace('./images/', '/images/');
    }
    
    // If path already starts with '/images/', use as is
    if (imagePath.startsWith('/images/')) {
      return imagePath;
    }
    
    // If it's just a filename, prepend '/images/'
    if (!imagePath.includes('/')) {
      return `/images/${imagePath}`;
    }
    
    // Otherwise use as provided
    return imagePath;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <img src="/assets/icon-order-confirmed.svg" alt="Order confirmed" />
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </div>
        
        <div className="order-summary">
          {cartItems.map(item => (
            <div key={item.id} className="order-item">
              <div className="order-item-image">
                <img 
                  src={getImageSrc(item.image.thumbnail)} 
                  alt={item.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="order-item-placeholder"
                  style={{ display: 'none', width: '48px', height: '48px', backgroundColor: '#f4edeb', borderRadius: '4px', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#87635a' }}
                >
                  IMG
                </div>
              </div>
              <div className="order-item-info">
                <h4 className="order-item-name">{item.name}</h4>
                <div className="order-item-details">
                  <span className="order-item-quantity">{item.quantity}x</span>
                  <span className="order-item-price">@ ${item.price.toFixed(2)}</span>
                </div>
              </div>
              <span className="order-item-total">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          
          <div className="order-total">
            <span>Order Total</span>
            <span className="total-price">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        
        <button className="start-new-order-btn" onClick={onStartNewOrder}>
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;