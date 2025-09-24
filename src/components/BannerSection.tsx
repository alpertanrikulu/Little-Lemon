
import RestaurantFood from "../assets/icons_assets/restauranfood.jpg"

const BannerSection = () => {
  return (
    <section className=' bg-lemongreen text-white py-[50px] md:h-[420px]'>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start max-w-[860px] mx-auto px-[10px] md:px-[0px]">
          <article className='flex flex-col justify-between h-[295px] gap-[20px] max-w-[280px]'>
            <div className='font-markazi'>
              <h1 className='text-[64px] font-medium'>Little Lemon</h1>
              <h2 className='text-[40px] font-regular mt-[-30px]'>Chicago</h2>
            </div>
            <p className='font-karla text-[18px] font-medium'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            <a href="#" className='px-[16px] py-[8px] rounded-[16px] bg-lemonyellow text-black font-karla text-[18px] font-medium w-auto text-center'>Reserve a Table</a>
          </article>
          <img className='rounded-2xl w-[394px] h-[415px] mt-[50px]' src={RestaurantFood} alt="restaurnat food" width={394} height={415} />
        </div>
      </section>
  )
}

export default BannerSection