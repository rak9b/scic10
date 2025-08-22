
# 🛒 ShopNex – Next.js 15 E-commerce App

ShopNex is a modern **E-commerce web application** built with **Next.js 15 (App Router)**.  
It provides a seamless shopping experience where users can **explore products, view details, and manage items through a secure dashboard**.  
Authentication is handled with **NextAuth.js**, ensuring protected access for logged-in users.  

🔗 **Live Site:** [ShopNex on Vercel](https://scic-assignment-10.vercel.app/)  
💻 **Repository:** [ShopNex GitHub Repo](https://github.com/nurislam243/scic-assignment-10)

---

## 🚀 Features

- 🛍️ **Browse Products** – Explore a variety of products with details like price & description.  
- 🔍 **Product Details Page** – View detailed information about each product.  
- 🔑 **Authentication with NextAuth.js** – Secure login/logout system.  
- 👤 **Protected Dashboard** – Only logged-in users can add new products.  
- ➕ **Add Products** – Dashboard form to add and manage products.  
- 🎨 **Responsive Design** – Fully mobile-friendly and modern UI.  

---

## 🛠️ Tech Stack

- **Next.js 15 (App Router)**  
- **React**  
- **NextAuth.js** (Authentication)  
- **Tailwind CSS** (Styling)  
- **MongoDB / JSON (for product data)**  

---

## 📂 Project Structure

ShopNex/  
├── app/  
│ ├── dashboard/ # Protected routes  
│ ├── products/ # Product listing & details  
│ ├── api/ # API routes  
│ ├── layout.js # Root layout  
│ └── page.js # Home page  
├── components/ # Reusable UI components  
├── public/ # Static assets  
├── styles/ # Global styles  
└── README.md


---

## 🔑 Route Summary

- `/` → Home page with featured products  
- `/products` → All products listing  
- `/products/[id]` → Product details page  
- `/dashboard` → Protected dashboard (requires login)  
- `/dashboard/add-product` → Add new product form  
- `/api/auth/[...nextauth]` → NextAuth.js authentication route  

---

## 📦 Sample Product Data

Below is an example of how product data is structured in ShopNex:

```json
{
  "_id": "68a7c7b368559c7f4d75fcb1",
  "name": "Smartphone X",
  "description": "Experience cutting-edge technology with the Smartphone X, featuring a powerful processor and sleek design.",
  "price": 899,
  "image": "https://i.ibb.co.com/S4DyN0H5/pexels-sam-basun-2149533721-30846310.webp",
  "category": "Smartphone",
  "stock": 50,
  "brand": "TechTrend",
  "rating": 4.8,
  "releaseDate": "2025-03-15"
}
```

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nurislam243/scic-assignment-10.git
   cd scic-assignment-10
   ```
2.  **Install dependencies**
    
    `npm install` 
    
3.  **Set up environment variables**  
    Create a `.env.local` file in the root and add:
    
    `NEXTAUTH_SECRET=your_secret_key
    NEXTAUTH_URL=http://localhost:3000` 
    
4.  **Run the development server**
    
    `npm run dev` 
    
5.  Open [http://localhost:3000](http://localhost:3000) in your browser 🚀
    

----------

## 📦 Deployment

Deployed easily on **Vercel**:  
👉 [Live Site](https://scic-assignment-10.vercel.app/)

## 👨‍💻 Author

**Nur Islam**

-   🌐 [GitHub](https://github.com/nurislam243)
    
-   💼 Web Development Enthusiast