import "swiper/css";
import "swiper/css/pagination";
import PageTitle from "../../../../shared/components/PageTitle/PageTitle";
import Review from "../Review/Review";
import { getAllReviewsThunk } from "../../../../redux/feedback/feedbackThunks";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { StyledReviews } from "./Reviews.styled";
import {  useDispatch } from "react-redux";

function Reviews({ reviews }) {
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  return (
    <StyledReviews>
      <PageTitle>Reviews</PageTitle>
      {reviews?.length > 0 && (
        <Swiper
          // onSlideChange={(swiper) => {
          //   if (swiper.activeIndex === reviews.length - 1) {
          //     console.log(swiper.activeIndex);
          //     let page = 1;
          //     page += 1;
          //     console.log(page);
          //     dispatch(getAllReviewsThunk({page, limit: 8}))
          //   }
          // }}
          spaceBetween={isDesktop ? 24 : 32}
          slidesPerView={isDesktop ? 2 : 1}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {reviews.map((review) => {
            return  <SwiperSlide key={review._id}>
              <Review review={review} />
            </SwiperSlide>
          })}
        </Swiper>
      )}
    </StyledReviews>
  );
}

export default Reviews;
