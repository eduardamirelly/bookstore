import { BookCover } from '../../../../../BookCover';

import { Autoplay } from 'swiper';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useReduxSelector } from '../../../../../../store';
import { loadBooksRequest } from '../../../../../../store/features/books';

export const Carousel = () => {
  const dispatch = useDispatch();
  const books = useReduxSelector((state) => state.books.data);

  useEffect(() => {
    dispatch(loadBooksRequest());
  }, []);

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
        <BookCover beforeShadow />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookCover beforeShadow />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookCover beforeShadow />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookCover beforeShadow />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookCover beforeShadow />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookCover beforeShadow />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookCover beforeShadow />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookCover beforeShadow />
      </SwiperSlide>

      <SwiperSlide style={{ width: '200px' }}>
        <BookCover beforeShadow />
      </SwiperSlide>
    </Swiper>
  );
};
