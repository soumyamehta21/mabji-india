import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#03254c] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/diamond-rensu-logo-portrait.svg"
            alt="Diamondrensu"
            width={140}
            height={140}
            className="mb-4"
          />
        </div>

        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-3">DIAMONDRENSU</h3>
          <ul className="space-y-2 text-sm">
            {[
              "About Us",
              "The Founder",
              "Customer Stories",
              "Reviews",
              "FAQ's",
              "Shipping Policy",
              "Return/Exchange Policy",
              "Terms of Service",
              "Privacy Policy",
              "Contact Us",
              "Order Tracking",
              "Payment Policy",
              "Sitemap",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-3">LAB GROWN DIAMONDS</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Engagement Rings",
              "Wedding Rings",
              "Diamond Earrings",
              "Bracelets and Bangles",
              "Pendants and Necklaces",
              "Wedding Sets",
              "Men's Collection",
              "Lab Grown Diamonds",
              "Hand Picked Diamonds",
              "Colored Lab Diamonds",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-3">MOISSANITE</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Engagement Rings",
              "Wedding Bands",
              "Earrings",
              "Pendants",
              "Bracelets",
              "Bridal Sets",
              "Men's Collection",
              "Loose Moissanite",
              "Colored Moissanite",
              "Designer Collection",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-3">RESOURCES / EDUCATION</h3>
          <ul className="space-y-2 text-sm">
            {[
              "The Blog",
              "Find Your Ring Size",
              "Engagement Ring Style",
              "Jewelry Care",
              "Order Process",
              "Moissanite vs Diamond Size Chart",
              "Moissanite vs Lab Grown",
              "Diamond vs Diamond",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social & App Links */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-end items-center border-t border-white/10 pt-8">
        <div className="flex space-x-4 text-white text-lg mb-4 md:mb-0">
          <FaXTwitter />
          <FaFacebookF />
          <FaYoutube />
          <FaInstagram />
          <FaPinterest />
          <FaTiktok />
        </div>

      </div>

      {/* Payment & Copyright */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col items-center">
        {/* <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
          {[
            "/paypal.png",
            "/visa.png",
            "/mastercard.png",
            "/jcb.png",
            "/amex.png",
            "/shopify.png",
            "/gpay.png",
            "/applepay.png",
          ].map((src) => (
            <Image key={src} src={src} alt="Payment" width={40} height={30} />
          ))}
        </div> */}
        <p className="text-sm text-gray-300">©2025 Diamondrensu. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

