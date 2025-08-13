# 🍰 Dessert Shop - React SPA

A modern, responsive dessert shop single-page application built with React. Users can browse desserts, add them to cart, manage quantities, and place orders with localStorage persistence.

## 🎯 Features

- **Product Catalog**: Display desserts fetched from API
- **Shopping Cart**: Add, remove, and update item quantities
- **Order Management**: Confirm orders with detailed summary
- **localStorage**: Cart persistence across page refreshes
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, minimalist design with hover effects

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Pure CSS (no frameworks)
- **State Management**: React Hooks (useState, useEffect, custom hooks)
- **API**: RESTful API integration
- **Storage**: localStorage for cart persistence

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dessert-shop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── ProductCard.jsx   # Individual product display
│   ├── ProductList.jsx   # Products grid container
│   ├── Cart.jsx          # Shopping cart component
│   └── OrderConfirmationModal.jsx  # Order confirmation modal
├── hooks/                # Custom React hooks
│   └── useCart.js        # Cart state management
├── services/             # API services
│   └── api.js            # API calls
├── utils/                # Utility functions
│   └── localStorage.js   # localStorage operations
├── App.jsx               # Main application component
├── App.css               # Global styles
├── index.css             # Base styles
└── main.jsx              # Application entry point
```

## 🌐 API Integration

The application fetches dessert data from:
```
https://json-api.uz/api/project/dessertss/desserts
```

### Data Structure
```json
{
  "data": [
    {
      "id": 1,
      "name": "Waffle with Berries",
      "category": "Waffle",
      "price": 6.5,
      "image": {
        "thumbnail": "../images/image-waffle-thumbnail.jpg",
        "mobile": "../images/image-waffle-mobile.jpg",
        "tablet": "../images/image-waffle-tablet.jpg",
        "desktop": "../images/image-waffle-desktop.jpg"
      }
    }
  ]
}
```

## 💡 Key Features Implementation

### Cart Management
- **Add to Cart**: Adds items or increases quantity
- **Quantity Control**: Increase/decrease with visual feedback
- **Remove Items**: Individual item removal
- **Auto-cleanup**: Items with 0 quantity are automatically removed

### localStorage Integration
- Cart state persists across page refreshes
- Data saved on every cart change
- Automatic loading on app initialization
- Clean cart clear functionality

### Responsive Design
- **Desktop**: Grid layout with sidebar cart
- **Tablet**: Single column layout
- **Mobile**: Optimized for touch interactions
- **Images**: Responsive picture elements with multiple sources

### Error Handling
- API error states with retry functionality
- Image loading fallbacks
- Loading states during API calls
- Graceful error recovery

## 🎨 Design System

### Colors
- **Primary**: `#C73E1D` (Orange-red)
- **Background**: `#FCF8F5` (Cream)
- **Text**: `#260F08` (Dark brown)
- **Secondary**: `#87635A` (Light brown)
- **Border**: `#F4EDEB` (Light cream)

### Typography
- **Font**: Red Hat Text (400, 600, 700)
- **Sizes**: Responsive scaling from 14px to 40px

### Components
- **Buttons**: Rounded corners, hover effects
- **Cards**: Subtle shadows, border radius
- **Modal**: Overlay with centered content
- **Icons**: Custom SVG icons

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Performance Features

- **Image Optimization**: Responsive images with multiple sources
- **Code Splitting**: Component-based architecture
- **Efficient Re-renders**: Optimized state updates
- **Minimal Bundle**: No external CSS frameworks

## 📋 Requirements Compliance

✅ **UI/UX**: Matches Figma design specifications  
✅ **Technology**: React with pure CSS  
✅ **Responsive**: Works on all device sizes  
✅ **State Management**: Custom hooks and React state  
✅ **API Integration**: Dynamic data fetching  
✅ **localStorage**: Cart persistence  
✅ **Error Handling**: Comprehensive error states  
✅ **Loading States**: User feedback during operations  
✅ **Clean Architecture**: Reusable components  

## 🚀 Deployment

The application can be deployed to any static hosting service:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

## 📞 Support

For issues or questions, please check the API endpoint and ensure all dependencies are properly installed.

---

Built with ❤️ using React and modern web technologies.
