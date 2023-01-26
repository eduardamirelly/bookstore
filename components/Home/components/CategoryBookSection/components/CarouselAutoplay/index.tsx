import { BookBuy } from '../../../../../BookBuy';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Book } from '../../../../../../store/@types/books';

interface CarouselAutoplayProps {
  sliders: Book[];
}

export const CarouselAutoplay = ({ sliders }: CarouselAutoplayProps) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={'auto'}
      grabCursor={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      style={{
        width: '100%',
      }}
    >
      {sliders.map((slide) => (
        <SwiperSlide key={slide.id} style={{ width: '200px' }}>
          <BookBuy
            imgSrc={slide.cover}
            price={slide.price}
            isFavorited={slide.isFavorite}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
