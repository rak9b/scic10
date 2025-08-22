import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: <FaFacebookF />, href: "https://www.facebook.com/nur.islam.568309/" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/md-nur-islam1/" },
    { name: "GitHub", icon: <FaGithub />, href: "https://github.com/nurislam243" },
  ];

  return (
    <footer className="bg-neutral text-white py-10 px-4 md:px-10">
      <div className="max-w-[1536px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
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
          <p className="text-gray-200 mt-2">
            ShopNex is your one-stop online store for tech gadgets, electronics, and accessories. Discover top products at amazing prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
          </ul>
        </div>


        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <ul className="flex flex-col gap-3">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <span className="text-lg">{social.icon}</span>
                  {social.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Email: support@shopnex.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Tech Street, Silicon Valley</li>
          </ul>
        </div>

      </div>

      <div className="mt-10 border-t border-primary/60 pt-4 text-center text-gray-300">
        &copy; {new Date().getFullYear()} ShopNex. All rights reserved.
      </div>
    </footer>
  );
}
