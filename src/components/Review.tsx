import React from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'

interface Props {
  ariaLabel?: string
}

const Review: React.FC<Props> = ({ ariaLabel }) => {
  const config = genConfig()
  return (
    <article
      role="article"
      aria-label={ariaLabel || "Customer testimonial"}
      className='flex flex-col justify-between p-[8px] items-center font-karla bg-lemongray rounded-[16px]'
    >
      <p aria-hidden="true">⭐⭐⭐⭐⭐</p>
      <Avatar
        className="w-24 h-24 rounded-full"
        {...config}
        
      />
      <p className='font-karla text-[18px] font-bold'>Roger Federer</p>
      <p className='font-karla text-[16px] leading-[1.5] line-clamp-2 max-w-[140px]'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ratione magnam dolore, laboriosam alias ab!
      </p>
    </article>
  )
}

export default Review
