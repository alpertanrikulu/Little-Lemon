import { useState } from "react";
import Logo from "../assets/Logo.svg";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header>
      <nav
        className="flex justify-between items-center px-[10px] md:px-[0px] max-w-[860px] mx-auto my-[50px] relative"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to="/" aria-label="Go to homepage">
          <img
            src={Logo}
            alt="Logo"
            width={147}
            height={40}
            className="w-[147px] h-[40px]"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-karla text-[20px] font-bold justify-between items-center gap-[20px]">
          <li><Link className="whitespace-nowrap" to="/">HOME</Link></li>
          <li><Link className="whitespace-nowrap" to="/">ABOUT</Link></li>
          <li><Link className="whitespace-nowrap" to="/">MENU</Link></li>
          <li><Link className="whitespace-nowrap" to="/">RESERVATIONS</Link></li>
          <li><Link className="whitespace-nowrap" to="/">ORDER ONLINE</Link></li>
          <li><Link className="whitespace-nowrap" to="/">LOGIN</Link></li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={36} /> : <Menu size={36} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul
            id="mobile-menu"
            className="md:hidden flex flex-col justify-between absolute top-[50px] right-[10px] border-2 rounded-[16px] p-[16px] font-karla text-[16px] font-medium bg-lemongray"
            role="menu"
          >
            <li role="none"><Link role="menuitem" className="whitespace-nowrap" to="/" onClick={() => setIsOpen(false)}>HOME</Link></li>
            <li role="none"><Link role="menuitem" className="whitespace-nowrap" to="/" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
            <li role="none"><Link role="menuitem" className="whitespace-nowrap" to="/" onClick={() => setIsOpen(false)}>MENU</Link></li>
            <li role="none"><Link role="menuitem" className="whitespace-nowrap" to="/" onClick={() => setIsOpen(false)}>RESERVATIONS</Link></li>
            <li role="none"><Link role="menuitem" className="whitespace-nowrap" to="/" onClick={() => setIsOpen(false)}>ORDER ONLINE</Link></li>
            <li role="none"><Link role="menuitem" className="whitespace-nowrap" to="/" onClick={() => setIsOpen(false)}>LOGIN</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
