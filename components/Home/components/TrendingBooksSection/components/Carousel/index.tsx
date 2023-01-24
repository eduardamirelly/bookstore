import { BookCover } from '../../../../../BookCover';

import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Book } from '../../../../../../store/@types/books';

interface CarouselProps {
  sliders: Book[];
}

export const Carousel = ({ sliders = [] }: CarouselProps) => {
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
      {sliders.map((slide) => (
        <SwiperSlide key={slide.id} style={{ width: '200px' }}>
          <BookCover beforeShadow />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
