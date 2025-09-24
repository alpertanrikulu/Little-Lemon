
import { Package } from 'lucide-react'
import type React from 'react';

interface Props {
  image: string;
  title: string;
  price: string;
  description: string;
}

const Card: React.FC<Props> = ({image, title, price, description}) => {
  return (
          <div className='w-[250px] bg-lemongray rounded-[16px] h-[500px] flex flex-col justify-between'>
            <img className='rounded-t-[16px]' src={image} alt="greek salad" width={250} height={300} />
            <div className='p-[16px] flex flex-col justify-between gap-[24px] h-full'>
              <div className='flex justify-between items-center'>
                <h3 className='font-karla font-bold text-[18px]'>{title}</h3>
                <p className='font-karla font-medium text-[16px] text-red-600'>${price}</p>
              </div>
              <p>{description}</p>
              <div className='flex justify-between items-center'>
                <button className='font-karla font-medium text-[16px] bg-lemonyellow text-black px-[16px] py-[8px] rounded-[16px]'>Add to Basket</button>
                <Package />
              </div>
            </div>
          </div>
  )
}

export default Card