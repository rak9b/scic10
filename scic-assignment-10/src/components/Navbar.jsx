"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper for active link class
  const isActive = (path) =>
    pathname === path ? "text-primary font-semibold" : "hover:text-primary";

  return (
    <nav className="bg-base-100 shadow shadow-primary/40 sticky top-0 z-50 px-3 @min-[370px]:px-4 @min-[600px]:px-7 @min-[800px]:px-9 @min-[1200px]:px-10 @min-[1580px]:px-0">
      <div className="max-w-[1536px] mx-auto flex items-center justify-between py-4  ">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Icon / Logo Image */}
          <Image
            src="/shopnex.png"
            alt="ShopNex Logo"
            width={20}
            height={22}
          />
          {/* Text */}
          <span className="text-2xl font-bold text-primary">ShopNex</span>
        </Link>
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium items-center">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/products" className={isActive("/products")}>Products</Link>

          {/* Dashboard Dropdown */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className={`cursor-pointer ${pathname.startsWith("/dashboard") ? "text-primary font-semibold" : "hover:text-primary"}`}
            >
              Dashboard
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow-md border border-primary shadow-primary/50 bg-base-200 rounded-box w-52 mt-2">
              <li>
                <Link
                  href="/dashboard/add-product"
                  className={isActive("/dashboard/add-product")}
                >
                  Add Product
                </Link>
              </li>
            </ul>
          </div>

          {/* Logout button desktop */}
          {session && (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="btn btn-sm btn-outline btn-primary"
            >
              Logout
            </button>
          )}

          {/* User Avatar Dropdown */}
          {session ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="flex items-center cursor-pointer space-x-2">
                <img
                  src={session.user?.image || "/default-avatar.png"}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full border-2 border-primary"
                  referrerPolicy="no-referrer"
                />
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-3 shadow bg-base-200 rounded-box w-56 mt-2">
                <li><span className="font-semibold">{session.user?.name}</span></li>
                <li><span className="text-sm text-gray-500">{session.user?.email}</span></li>
              </ul>
            </div>
          ) : (
            <Link href="/login" className="btn btn-primary btn-sm">Login</Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-base-100 px-4 pb-4 space-y-3">
          {session && (
            <div className="flex flex-col items-center space-y-2 mb-3">
              <img
                src={session.user?.image || "/default-avatar.png"}
                alt="User Avatar"
                className="w-12 h-12 rounded-full border-2 border-primary"
                referrerPolicy="no-referrer"
              />
              <div className="text-center">
                <p className="font-semibold">{session.user?.name}</p>
                <p className="text-sm text-gray-500">{session.user?.email}</p>
              </div>
            </div>
          )}

          <Link href="/" className={`block btn btn-ghost w-full justify-start ${isActive("/")}`}>Home</Link>
          <Link href="/products" className={`block btn btn-ghost w-full justify-start ${isActive("/products")}`}>Products</Link>

          {/* Mobile Dashboard Dropdown */}
          <div className="dropdown w-full">
            <label
              tabIndex={0}
              className={`btn btn-ghost w-full text-left ${pathname.startsWith("/dashboard") ? "text-primary font-semibold" : ""}`}
            >
              Dashboard
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-full mt-2">
              <li>
                <Link
                  href="/dashboard/add-product"
                  className={isActive("/dashboard/add-product")}
                >
                  Add Product
                </Link>
              </li>
            </ul>
          </div>

          {/* Logout button mobile */}
          {session && (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="btn btn-sm btn-outline btn-primary w-full mt-2"
            >
              Logout
            </button>
          )}

          {!session && <Link href="/login" className="btn btn-primary btn-sm w-full">Login</Link>}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
