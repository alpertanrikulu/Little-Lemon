
import RestaurantFood from "../assets/restauranfood.jpg"

const Footer = () => {
  return (
    <footer className='flex py-[36px] bg-lemongreen gap-5 justify-between'>
      <nav className='flex flex-wrap justify-between text-white font-karla text-[18px] gap-[50px] w-[860px] mx-auto px-[10px] md:px-[0px]'>
      <img className='rounded-2xl w-[170px] h-[280px]' src={RestaurantFood} alt="Footer image" width={170} height={280} />
        <ul className='flex flex-col'>
          <li>
            <a className="text-[20px] font-bold text-lemonyellow" href="#">Doormat Navigation</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
        <ul className='flex flex-col'>
          <li>
            <a className="text-[20px] font-bold text-lemonyellow" href="#">Contact</a>
          </li>
          <li>
            <a href="#">Address</a>
          </li>
          <li>
            <a href="#">Phone Number</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
        </ul>
        <ul className='flex flex-col'>
          <li>
            <a className="text-[20px] font-bold text-lemonyellow" href="#">Social Media Links</a>
          </li>
          <li>
            <a href="#">Linked in</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer