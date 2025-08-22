"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export default function ProductDetailPage({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          setProduct(null);
          return;
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  // Rating function
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-500 inline-block" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 inline-block" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500 inline-block" />);
      }
    }
    return stars;
  };

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <button
          onClick={() => router.push("/products")}
          className="btn btn-primary mt-4"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[1536px] mx-auto py-10 px-3 @min-[370px]:px-4 @min-[600px]:px-7 @min-[800px]:px-9 @min-[1200px]:px-10 @min-[1580px]:px-0">
      {/* Back Button */}
      <button onClick={() => router.back()} className="btn btn-primary mb-6">
        ← Back
      </button>

      {/* Image on Top */}
      <div className="w-full h-[400px] relative mb-8">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="bg-base-200 shadow-lg rounded-xl p-6">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg text-base-content mb-4">{product.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-lg">
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Release Date:</span>{" "}
              {new Date(product.releaseDate).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-lg flex items-center gap-2">
              <span className="font-semibold">Stock:</span> {product.stock} pcs
            </p>
            <p className="text-lg flex items-center gap-2">
              <span className="font-semibold">Rating:</span>{" "}
              <span className="flex">{renderStars(product.rating)}</span>
              <span className="ml-2">({product.rating})</span>
            </p>
          </div>
        </div>

        <p className="text-3xl font-semibold mb-6">${product.price}</p>

        <button className="btn btn-primary w-full">Add to Cart</button>
      </div>
    </div>
  );
}
