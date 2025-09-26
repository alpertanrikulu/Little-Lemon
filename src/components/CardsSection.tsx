import Card from "./Card"
import GreekSalad from "../assets/greek salad.jpg"
import Bruchetta from "../assets/Bruchetta.jpg"
import LemonDessert from "../assets/lemon dessert.jpg"


const CardsSection = () => {
  const cardContents = [
    {
      image: GreekSalad,
      title: "Greek Salad",
      price: "12.99",
      description: `It look like readable English. 
      Many desktop publishing packages and web page 
      editors now use Lorem Ipsum as their default model 
      text.`
    },
    {
      image: Bruchetta, 
      title: "Bruchetta",
      price: "16.99",
      description: `Toasted bread topped with garlic, 
      tomatoes, olive oil, and fresh basil. 
      A classic Italian appetizer loved worldwide.`
    },
    {
      image: LemonDessert, 
      title: "Lemon Dessert",
      price: "8.99",
      description: `A refreshing lemon-flavored dessert 
      with a light and creamy texture, 
      perfect to end your meal on a sweet note.`
    },
  ]
  return (
    <section className='max-w-[860px] mx-auto my-[108px]'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
          <h2 className='font-markazi font-medium text-[64px]'>This Weeks Specials</h2>
          <a className='bg-lemonyellow text-black text-[18px] font-karla font-medium px-[16px] py-[8px] rounded-[16px] mb-[16px] md:mb-[0px] mr-auto md:mr-0' href="#">Online Menu</a>
        </div>
        <div id='cards' className='flex justify-center sm:justify-between items-center flex-wrap px-[10px] md:px-[0px]'>
          {cardContents.map((dish, index) => (
            <Card key={index} image={dish.image} title={dish.title} price={dish.price} description={dish.description} />
          ))}
        </div>
      </section>
  )
}

export default CardsSection