import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper';
import './testimonials.css'
import AV1 from '../../assets/men1.jpg'
import AV2 from '../../assets/men2.jpg'
import AV3 from '../../assets/men3.jpg'
import AV4 from '../../assets/men4.jpg'


const Testimonials = () => {
  const data = [
    {
      id: 1,
      image: AV1,
      name: 'Ernest Achieve',
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis molestias explicabo quibusdam a adipisci? Perferendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
    },
    {
      id: 2,
      image: AV2,
      name: 'Tina Snow',
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis molestias explicabo quibusdam a adipisci? Perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
    },
    {
      id: 3,
      image: AV3,
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis molestias explicabo quibusdam a adipisci? Perferendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
    },
    {
      id: 4,
      image: AV4,
      name: 'Tom Cruise',
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis molestias explicabo quibusdam a adipisci? Perferendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
    },
  ]
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation]}
        navigation={true}
      >
        {data.map(({ id, name, image, review }, index) =>
          <SwiperSlide className='testimonial' key={index}>
            <div className="client__avatar">
              <img src={image} alt="" />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  )
}

export default Testimonials