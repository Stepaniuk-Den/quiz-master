import "swiper/css";
import PageTitle from "../../../../shared/PageTitle/PageTitle";
import Review from "../Review/Review";
import { Swiper, SwiperSlide } from "swiper/react";
import { StyledReviews } from "./Reviews.styled";

function Reviews() {
  return (
    <StyledReviews>
      <PageTitle>Reviews</PageTitle>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
      </Swiper>
    </StyledReviews>
  );
}

export default Reviews;
