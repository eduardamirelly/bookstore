import { BookCover } from '../../../../../BookCover';

import { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={'auto'}
      grabCursor={true}
      initialSlide={4}
      loop={true}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      speed={2000}
      style={{
        width: '100%',
        height: '320px',
        position: 'absolute',
      }}
    >
      <SwiperSlide style={{ width: '200px' }}>
        <BookCover imgSrc="/assets/cover-book.svg" beforeShadow="on" />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookCover imgSrc="/assets/cover-book.svg" beforeShadow="on" />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookCover imgSrc="/assets/cover-book.svg" beforeShadow="on" />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookCover imgSrc="/assets/cover-book.svg" beforeShadow="on" />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookCover imgSrc="/assets/cover-book.svg" beforeShadow="on" />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookCover imgSrc="/assets/cover-book.svg" beforeShadow="on" />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookCover imgSrc="/assets/cover-book.svg" beforeShadow="on" />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookCover imgSrc="/assets/cover-book.svg" beforeShadow="on" />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookCover imgSrc="/assets/cover-book.svg" beforeShadow="on" />
      </SwiperSlide>
    </Swiper>
  );
};
