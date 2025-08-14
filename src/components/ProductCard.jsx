import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ProductCard = ({ product, onAddToCart, quantity, onUpdateQuantity }) => {
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  const handleIncrease = () => {
    onUpdateQuantity(product.id, quantity + 1);
  };

  const handleDecrease = () => {
    onUpdateQuantity(product.id, quantity - 1);
  };

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

  const handleImageError = () => {
    setImageError(true);
  };

  const getImageElement = () => {
    if (imageError) {
      return (
        <div className="product-image-placeholder">
          <div className="placeholder-content">
            <h3>{product.name}</h3>
            <p>{product.category}</p>
          </div>
        </div>
      );
    }

    return (
      <picture>
        <source media="(min-width: 1024px)" srcSet={getImageSrc(product.image.desktop)} />
        <source media="(min-width: 768px)" srcSet={getImageSrc(product.image.tablet)} />
        <source media="(max-width: 767px)" srcSet={getImageSrc(product.image.mobile)} />
        <img 
          src={getImageSrc(product.image.desktop)} 
          alt={product.name}
          className="product-image"
          onError={handleImageError}
        />
      </picture>
    );
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        {getImageElement()}
        
        {quantity === 0 ? (
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <img src="/assets/icon-add-to-cart.svg" alt="Add to cart" />
            Add to Cart
          </button>
        ) : (
          <div className="quantity-controls">
            <button className="quantity-btn decrease" onClick={handleDecrease}>
              <img src="/assets/icon-decrement-quantity.svg" alt="Decrease" />
            </button>
            <span className="quantity">{quantity}</span>
            <button className="quantity-btn increase" onClick={handleIncrease}>
              <img src="/assets/icon-increment-quantity.svg" alt="Increase" />
            </button>
          </div>
        )}
      </div>
      
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;