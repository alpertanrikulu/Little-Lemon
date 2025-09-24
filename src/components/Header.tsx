
import Logo from "../assets/icons_assets/Logo.svg"

const Header = () => {
  return (
    <header className=''>
      <nav className='flex justify-between items-center max-w-[860px] mx-auto my-[50px]'>
      <img src={Logo} alt="Logo" width={147} height={40} className='w-[147px] h-[40px]'/>
        <ul className='font-karla text-[20px] font-bold flex justify-between items-center gap-[20px]'>
          <li>
            <a className='whitespace-nowrap' href="#">HOME</a>
          </li>
          <li>
            <a className='whitespace-nowrap' href="#">ABOUT</a>
          </li>
          <li>
            <a className='whitespace-nowrap' href="#">MENU</a>
          </li>
          <li>
            <a className='whitespace-nowrap' href="#">RESERVATIONS</a>
          </li>
          <li>
            <a className='whitespace-nowrap' href="#">ORDER ONLINE</a>
          </li>
          <li>
            <a className='whitespace-nowrap' href="#">LOGIN</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header