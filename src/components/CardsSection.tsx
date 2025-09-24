
import { Package } from 'lucide-react'
import GreekSalad from "../assets/icons_assets/greek salad.jpg"

const CardsSection = () => {
  return (
    <section className='px-[290px] my-[108px]'>
        <div className='flex justify-between items-center'>
        <h2 className='font-markazi font-medium text-[64px]'>This Weeks Specials</h2>
        <a className='bg-lemonyellow text-black text-[18px] font-karla font-medium px-[16px] py-[8px] rounded-[16px]' href="#">Online Menu</a>
        </div>
        <div id='card' className='flex justify-between items-center'>
          <div className='w-[240px] bg-lemongray rounded-[16px]'>
            <img className='rounded-t-[16px]' src={GreekSalad} alt="greek salad" width={240} height={208} />
            <div className='p-[16px] flex flex-col justify-between gap-[24px]'>
              <div className='flex justify-between items-center'>
                <h3 className='font-karla font-bold text-[18px]'>Greek Salad</h3>
                <p className='font-karla font-medium text-[16px] text-red-600'>$12.99</p>
              </div>
              <p>It look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
              <div className='flex justify-between items-center'>
                <p>Order Delivery</p>
                <Package />
              </div>
            </div>
          </div>
          <div className='w-[240px] bg-lemongray rounded-[16px]'>
            <img className='rounded-t-[16px]' src={GreekSalad} alt="greek salad" width={240} height={208} />
            <div className='p-[16px] flex flex-col justify-between gap-[24px]'>
              <div className='flex justify-between items-center'>
                <h3 className='font-karla font-bold text-[18px]'>Greek Salad</h3>
                <p className='font-karla font-medium text-[16px] text-red-600'>$12.99</p>
              </div>
              <p>It look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
              <div className='flex justify-between items-center'>
                <p>Order Delivery</p>
                <Package />
              </div>
            </div>
          </div>
          <div className='w-[240px] bg-lemongray rounded-[16px]'>
            <img className='rounded-t-[16px]' src={GreekSalad} alt="greek salad" width={240} height={208} />
            <div className='p-[16px] flex flex-col justify-between gap-[24px]'>
              <div className='flex justify-between items-center'>
                <h3 className='font-karla font-bold text-[18px]'>Greek Salad</h3>
                <p className='font-karla font-medium text-[16px] text-red-600'>$12.99</p>
              </div>
              <p>It look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
              <div className='flex justify-between items-center'>
                <p>Order Delivery</p>
                <Package />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CardsSection