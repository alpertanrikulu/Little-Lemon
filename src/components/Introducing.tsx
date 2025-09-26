import RestaurantChef from "../assets/restaurant chef B.jpg";
import Restaurant from "../assets/restaurant.jpg";

const Introducing = () => {
  return (
    <section className='py-[36px]'>
        <div className='max-w-[860px] mx-auto flex flex-wrap justify-between items-center px-[10px] md:px[0px]'>
            <article className='max-w-[350px]'>
                <div className='gap-[36px]'>
                  <h2 className='font-markazi font-medium text-[64px]'>Little Lemon</h2>
                  <p className='font-markazi text-[40px] mt-[-30px]'>Chicago</p>
                </div>
                <p className='font-karla text-[16px]'>chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </article>
            <div className='relative w-[420px] h-[412px]'>
                <img className='absolute top-0 right-0 rounded-[16px]' src={Restaurant} alt="restaurant" width={264} height={309}/>
                <img className='absolute bottom-0 left-0 rounded-[16px]' src={RestaurantChef} alt="restaurant chef" width={264} height={309}/>
            </div>
        </div>

    </section>
  )
}

export default Introducing