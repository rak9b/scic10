"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="max-w-[1536px] mx-auto py-10 px-3 @min-[370px]:px-4 @min-[600px]:px-7 @min-[px-9]: @min-[1200px]:px-10 @min-[1580px]:px-0 ">
      <h1 className="text-3xl text-primary font-bold mb-6 text-center">Our Products</h1>

      {products.length === 0 ? (
        <p className="text-center text-primary">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-base-200 shadow rounded-xl overflow-hidden hover:shadow-lg shadow-primary/50 transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={250}
                className="w-full  h-[250px] object-cover "
              />
              <div className="p-5">
                <h2 className="text-primary text-xl font-semibold">{product.name}</h2>
                <p className="text-base-content mt-2">
                  {product.description.slice(0, 100)}...
                </p>
                <p className="mt-3 font-bold text-lg">${product.price}</p>
                <Link
                  href={`/products/${product._id}`}
                  className="btn btn-primary mt-4 w-full"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
