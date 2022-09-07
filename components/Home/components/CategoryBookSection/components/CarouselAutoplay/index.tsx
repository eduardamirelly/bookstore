import { BookBuy } from '../../../../../BookBuy';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

export const CarouselAutoplay = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={'auto'}
      grabCursor={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      style={{
        width: '100%',
      }}
    >
      <SwiperSlide style={{ width: '200px' }}>
        <BookBuy />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookBuy />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookBuy />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookBuy />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookBuy />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookBuy />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookBuy />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookBuy />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookBuy />
      </SwiperSlide>
    </Swiper>
  );
};
