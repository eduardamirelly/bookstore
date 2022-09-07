import { BookCover } from '../../../../../BookCover';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={'auto'}
      centeredSlides={true}
      grabCursor={true}
      initialSlide={4}
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
