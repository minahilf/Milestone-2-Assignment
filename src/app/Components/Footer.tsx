import Image from "next/image";
import Link from "next/link";
import logo from "../../../Assets/logo.png";
import tweet from "../../../Assets/Twitter.png";
import insta from "../../../Assets/Instagram.png";
import fb from "../../../Assets/Facebook.png";
import link from "../../../Assets/Linkedin.png";

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-white px-4 py-8 md:px-8 lg:px-16">
      {/* Newsletter Section */}
      <div className="max-w-screen-xl mx-auto mb-12">
        <Image src={logo} alt="logo" width={100} height={100}/>
        <p className="mb-4 mt-4">Subscribe to Our Newsletter:</p>
        <p className="text-gray-300 text-sm mb-4">
          Receive Updates on New Arrivals and Special Promotions!
        </p>
        <div className="flex gap-2 max-w-md">
          <input
            type="email"
            placeholder="Your email here"
            className="flex-1 px-4 py-2 bg-transparent border border-gray-600 rounded"
          />
          <button className="px-2 py-2 bg-orange-500 rounded ">
            Submit
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto mb-8">
        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">Fashion</Link></li>
            <li><Link href="#">Jewelry</Link></li>
            <li><Link href="#">Sports</Link></li>
            <li><Link href="#">Electronics</Link></li>
            <li><Link href="#">Indoor</Link></li>
          </ul>
        </div>

        {/* Shopping */}
        <div>
          <h3 className="font-semibold mb-4">Shopping</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">Payments</Link></li>
            <li><Link href="#">Delivery options</Link></li>
            <li><Link href="#">Buyer protection</Link></li>
          </ul>
        </div>

        {/* Customer care */}
        <div>
          <h3 className="font-semibold mb-4">Customer care</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">Help center</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Privacy policy</Link></li>
            <li><Link href="#">Returns & refund</Link></li>
            <li><Link href="#">Survey & feedback</Link></li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Shop</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Services</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 mb-8 max-w-screen-xl mx-auto">
        <Link href="#" className="w-8 h-8">
          <Image src={tweet} alt="Twitter" width={32} height={32} />
        </Link>
        <Link href="#" className="w-8 h-8">
          <Image src={fb} alt="Facebook" width={32} height={32} />
        </Link>
        <Link href="#" className="w-8 h-8">
          <Image src={link} alt="LinkedIn" width={32} height={32} />
        </Link>
        <Link href="#" className="w-8 h-8">
          <Image src={insta} alt="Instagram" width={32} height={32} />
        </Link>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm max-w-screen-xl mx-auto">
        <p>© 2023 Local Face Inc. All rights reserved</p>
      </div>
    </footer>
  );
}