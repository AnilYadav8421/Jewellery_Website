import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { bannerData } from '../assets/jewelery_assets/assets';

import 'swiper/css';
import 'swiper/css/pagination';

const ImageCarousel = () => {
  return (
    <section className="w-full bg-white py-4">
      <div className="w-full ">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop={bannerData.length > 1}
        >
          {bannerData.map((banner) => (
            <SwiperSlide key={banner.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="w-full h-[30vh] sm:h-[55vh] md:h-[70vh] overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={banner.image}
                  alt={banner.context || 'Jewelry Banner'}
                  className="w-full h-full object-center transition-transform duration-500 ease-in-out hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImageCarousel;
