import "swiper/css";
import "swiper/css/pagination";
import PageTitle from "../../../../shared/PageTitle/PageTitle";
import Review from "../Review/Review";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { StyledReviews } from "./Reviews.styled";

function Reviews({ reviews }) {
  return (
    <StyledReviews>
      <PageTitle>Reviews</PageTitle>
      {reviews?.length > 0 && (
        <Swiper
          spaceBetween={24}
          slidesPerView={2}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <Review review={review}/>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </StyledReviews>
  );
}

export default Reviews;
