import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { reviews } from "../../Conestants";

export const Review = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <div>
            <img src={review.image} alt="Review" />
            <p>{review.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
