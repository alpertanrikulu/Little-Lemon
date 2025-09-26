import React from 'react'
import Review from './Review'

const Testimonials = () => {
    // const config = genConfig("alper")
  return (
    <section className='bg-lemongreen px-[10px] md:px[0px] py-[36px]'>
        <h2 className='font-markazi text-[64px] font-medium md:text-center text-white mb-[16px]'>Testimonials</h2>
        <div className='flex flex-wrap items-center justify-between max-w-[860px] mx-auto gap-[10px]'>
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
        </div>
    </section>
  )
}

export default Testimonials