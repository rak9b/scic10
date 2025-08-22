"use client";

import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/products" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-full max-w-md shadow-md bg-base-100 shadow-primary/30 p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Login to ShopNex</h1>
        <button
          onClick={handleGoogleLogin}
          className="text-lg btn btn-primary w-full flex items-center justify-center gap-2"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
