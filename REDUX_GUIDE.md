# 🔄 Redux Toolkit Guide

Bu loyihada **useState** o'rniga **Redux Toolkit** ishlatilgan. Bu yerda Redux implementatsiyasi haqida ma'lumot berilgan.

## 🗂️ Redux Struktura

```
src/
├── features/             # Redux slices
│   ├── cartSlice.js      # Savat state management
│   ├── productsSlice.js  # Mahsulotlar state management
│   └── modalSlice.js     # Modal state management
├── store/
│   └── index.js          # Store konfiguratsiyasi
```

## 📦 Slice'lar

### 1. cartSlice.js - Savat State

```javascript
// State struktura
{
  items: [],           // Savatdagi mahsulotlar
  totalItems: 0,       // Jami mahsulotlar soni
  totalPrice: 0        // Jami narx
}

// Actions
addToCart(product)                    // Savatga qo'shish
updateQuantity({productId, quantity}) // Miqdorni o'zgartirish
removeFromCart(productId)             // Savatdan o'chirish
clearCart()                           // Savatni tozalash
```

### 2. productsSlice.js - Mahsulotlar State

```javascript
// State struktura
{
  items: [],           // Mahsulotlar ro'yxati
  loading: false,      // Yuklanish holati
  error: null          // Xatolik xabari
}

// Async Actions
fetchProducts()       // API'dan mahsulotlarni olish

// Sync Actions
clearError()         // Xatolikni tozalash
```

### 3. modalSlice.js - Modal State

```javascript
// State struktura
{
  isOrderConfirmationOpen: false  // Buyurtma tasdiqlash modali holati
}

// Actions
openOrderConfirmation()     // Modalni ochish
closeOrderConfirmation()    // Modalni yopish
toggleOrderConfirmation()   // Modalni toggle qilish
```

## 🔧 Qanday Ishlatish

### Component'da Redux ishlatish

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, selectCartItems } from '../features/cartSlice';

function MyComponent() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  return (
    <div>
      <p>Savat: {cartItems.length} ta mahsulot</p>
      <button onClick={() => handleAddToCart(product)}>
        Savatga qo'shish
      </button>
    </div>
  );
}
```

### Selector'lar

```javascript
// cartSlice.js dan
selectCartItems(state)      // state.cart.items
selectTotalItems(state)     // state.cart.totalItems
selectTotalPrice(state)     // state.cart.totalPrice

// productsSlice.js dan
selectProducts(state)       // state.products.items
selectProductsLoading(state) // state.products.loading
selectProductsError(state)  // state.products.error

// modalSlice.js dan
selectIsOrderConfirmationOpen(state) // state.modal.isOrderConfirmationOpen
```

## 🎯 Redux vs useState Farqlar

### useState (Eski usul)
```javascript
const [cartItems, setCartItems] = useState([]);
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);

// Har bir component'da alohida state
// Ma'lumotlarni prop'lar orqali uzatish kerak
// State management murakkab
```

### Redux Toolkit (Yangi usul)
```javascript
const cartItems = useSelector(selectCartItems);
const products = useSelector(selectProducts);
const loading = useSelector(selectProductsLoading);

// Global state - barcha component'lar kirishi mumkin
// Prop drilling yo'q
// Centralized state management
// DevTools support
// Time travel debugging
```

## 🛠️ Redux DevTools

Brauzerga **Redux DevTools Extension** o'rnating:
- [Chrome](https://chrome.google.com/webstore/detail/redux-devtools)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

DevTools orqali:
- ✅ State'ni real-time ko'rish
- ✅ Action'larni kuzatish
- ✅ Time travel debugging
- ✅ State diff'larni ko'rish

## 📱 localStorage Integration

Redux state localStorage bilan avtomatik sinxronlashtirilgan:

```javascript
// cartSlice.js da har bir o'zgarishda
localStorageUtils.saveCart(state.items);

// Sahifa yangilanganida state tiklanadi
const loadCartFromStorage = () => {
  const savedCart = localStorageUtils.getCart();
  // State'ni tiklash...
};
```

## 🚀 Performance

Redux Toolkit afzalliklari:
- **Immer** - immutable updates oson
- **Memoization** - selector'lar optimized
- **RTK Query** - kelajakda cache qilish uchun
- **DevTools** - debugging oson
- **Type Safety** - TypeScript bilan yaxshi ishlaydi

## 🎓 O'rganish Manbalari

1. [Redux Toolkit Docs](https://redux-toolkit.js.org/)
2. [React Redux Docs](https://react-redux.js.org/)
3. [Redux DevTools](https://github.com/reduxjs/redux-devtools)

## 🔄 Migration From useState

Agar useState'dan Redux'ga o'tmoqchi bo'lsangiz:

1. **State'ni slice'larga bo'ling**
2. **Action'larni yarating**
3. **Selector'larni yozing**
4. **Component'larda useSelector/useDispatch ishlatakng**
5. **localStorage integration qo'shing**

Redux Toolkit modern va powerful state management yechimi!