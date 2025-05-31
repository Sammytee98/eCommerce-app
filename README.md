# 🛍️ GTS E-Commerce Website

A modern, fully responsive e-commerce frontend built with **React**, **Vite**, and **Tailwind CSS**. This project showcases an end-to-end shopping experience with interactive UI, smooth animations, multi-step checkout, and state management using **Easy Peasy**, **React Hook Form**, and **Zod**.

---

## 🚀 Live Demo 🔗 [Visit the Live Site](https://your-deployment-url.vercel.app)

---

## ⚙️ Tech Stack

- **React** + **Vite**
- **Tailwind CSS** for utility-first styling
- **React Router DOM** for navigation
- **Framer Motion** for animations and transitions
- **Easy Peasy** for global state management (cart, wishlist, product data)
- **React Hook Form** + **Zod** for form handling & validation
- **TanStack Query (React Query)** for data fetching with pagination
- **LocalStorage** for persisting cart & wishlist
- **Font Awesome** for icons

---

## ✨ Key Features

### 🏠 Home Page

- Hero section with CTA
- Product categories & trending items
- Testimonials & store values

### 🛒 Shop & Product Pages

- Filter, sort & paginate products
- View products by category or all
- Detailed product page with image gallery

### 🧺 Cart Experience

- Slide-in mini cart
- Full cart page with quantity update & subtotal
- Cart items persist using localStorage

### ❤️ Wishlist

- Add/remove products from wishlist
- Slide-in wishlist UI with "Add to Cart" action

### 💳 Checkout

- Multi-step form: Billing → Shipping → Review → Payment
- Validations powered by React Hook Form + Zod -
  Auto-fill country/state from address input
- Terms & conditions gating

### 🔐 Auth Modal

- Toggle between Login & Sign Up
- Password show/hide - Social login UI (mocked)

### 🎉 Confirmation & Error

- Order summary after payment
- Estimated delivery date
- 404 page with animated fallback ---

## 🧱 Folder Structure

src/
|---assets/
|---components/
| |---about // About page components
| |---all products // All products page components
| |---auth modal // Auth modal components
| |---cart // Cart component
| |---checkout // Checkout component
| |---confirmation // Confirmation page components
| |---contact // Contact page components
| |---forms // All form (Billing, Contact...)
| |---home // Home components
| |---layouts // Header, Footer, Nav...
| |---product // Product page components
| |---ui // Reusable UI Element
|---context //Checkout, Product, Auth
|---data // Advantages, General Reviews, Value
|---hooks // Local Storage, Checkout...
|---layouts // Main Layout, Scroll To Top
|---pages // Home, All Products, Product...
|---store // Easy-peasy global store
|---App.jsx
|---main.css
|---main.jsx

📌 Future Improvements
Backend integration for real orders and authentication

Search functionality

Admin dashboard for product management

Payment gateway (Stripe, Paystack)

📸 Screenshots

Add screenshots of homepage, cart, checkout, and confirmation page here
🧑‍💻 Author

@yourgithub

📄 License

This project is for educational and portfolio use. No commercial license included.
