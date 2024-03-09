import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-slate-900 text-base-content rounded">
        <nav className="grid grid-flow-col gap-6 text-slate-300 lg:text-lg">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-8 text-slate-300">
            <FaFacebookF size={25} />
            <FaTwitter size={25} />
            <FaInstagram size={25} />
            <FaYoutube size={25} />
            <FaLinkedin size={25} />
          </div>
        </nav>
        <aside className="text-slate-300">
          <p>Copyright © 2024 - All right reserved by BlogWorm </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
