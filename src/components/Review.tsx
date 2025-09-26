import React from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'

const Review = () => {
    const config = genConfig() 
  return (
              <div className='flex flex-col justify-between p-[8px] items-center font-karla bg-lemongray rounded-[16px]'>
                  <p>⭐⭐⭐⭐⭐</p>
                  <Avatar className="w-24 h-24 rounded-full" {...config} />
                  <p className='font-karla text-[18px] font-bold'>Roger Federer</p>
                  <p className='font-karla text-[16px] leading-[1.5] line-clamp-2 max-w-[140px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ratione magnam dolore, laboriosam alias ab!</p>
              </div>
  )
}

export default Review