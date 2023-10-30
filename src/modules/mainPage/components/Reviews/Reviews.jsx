import "swiper/css";
import "swiper/css/pagination";
import PageTitle from "../../../../shared/components/PageTitle/PageTitle";
import Review from "../Review/Review";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { StyledReviews } from "./Reviews.styled";

function Reviews({ reviews }) {

  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  return (
    <StyledReviews>
      <PageTitle>Reviews</PageTitle>
      {reviews?.length > 0 && (
        <Swiper
          spaceBetween={isDesktop ? 24 : 32}
          slidesPerView={isDesktop ? 2 : 1}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
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
