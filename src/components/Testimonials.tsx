import React from 'react'
import Review from './Review'

const Testimonials = () => {
  return (
    <section
      className='bg-lemongreen px-[10px] md:px[0px] py-[36px]'
      aria-labelledby="testimonials-heading"
    >
      <h2
        id="testimonials-heading"
        className='font-markazi text-[64px] font-medium md:text-center text-white mb-[16px]'
      >
        Testimonials
      </h2>
      <div
        className='flex flex-wrap items-center justify-between max-w-[860px] mx-auto gap-[10px]'
      >
        <Review aria-label="Customer testimonial 1" />
        <Review aria-label="Customer testimonial 2" />
        <Review aria-label="Customer testimonial 3" />
        <Review aria-label="Customer testimonial 4" />
        <Review aria-label="Customer testimonial 5" />
        <Review aria-label="Customer testimonial 6" />
        <Review aria-label="Customer testimonial 7" />
        <Review aria-label="Customer testimonial 8" />
      </div>
    </section>
  )
}

export default Testimonials
