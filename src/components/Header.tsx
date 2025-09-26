
import { useState } from "react";
import Logo from "../assets/Logo.svg"
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <header className=''>
      <nav className='flex justify-between items-center px-[10px] md:px-[0px] max-w-[860px] mx-auto my-[50px] relative'>
      <img src={Logo} alt="Logo" width={147} height={40} className='w-[147px] h-[40px]'/>
        <ul className='hidden md:flex font-karla text-[20px] font-bold justify-between items-center gap-[20px]'>
          <li>
            <Link className='whitespace-nowrap' to="/">HOME</Link>
          </li>
          <li>
            <Link className='whitespace-nowrap' to="/">ABOUT</Link>
          </li>
          <li>
            <Link className='whitespace-nowrap' to="/">MENU</Link>
          </li>
          <li>
            <Link className='whitespace-nowrap' to="/">RESERVATIONS</Link>
          </li>
          <li>
            <Link className='whitespace-nowrap' to="/">ORDER ONLINE</Link>
          </li>
          <li>
            <Link className='whitespace-nowrap' to="/">LOGIN</Link>
          </li>
        </ul>
        {isOpen ? (
            <X size={36} className="md:hidden" onClick={() => setIsOpen(false)} />
        ) : (
            <Menu size={36} className="md:hidden" onClick={() => setIsOpen(true)} />
        )}
        {isOpen && (
        <ul className="md:hidden flex flex-col justify-between absolute top-[50px] right-[10px] border-2 rounded-[16px] p-[16px] font-karla text-[16px] font-medium bg-lemongray">
            <li>
            <Link className='whitespace-nowrap' to="/">HOME</Link>
            </li>
            <li>
            <Link className='whitespace-nowrap' to="/">ABOUT</Link>
            </li>
            <li>
            <Link className='whitespace-nowrap' to="/">MENU</Link>
            </li>
            <li>
            <Link className='whitespace-nowrap' to="/">RESERVATIONS</Link>
            </li>
            <li>
            <Link className='whitespace-nowrap' to="/">ORDER ONLINE</Link>
            </li>
            <li>
            <Link className='whitespace-nowrap' to="/">LOGIN</Link>
            </li>
        </ul>
        )}
      </nav>
    </header>
  )
}

export default Header