import { StyledReview } from "./Review.styled";
import CardTitle from "../../../../shared/CardTitle/CardTitle";
import Paragraph from "../../../../shared/Paragraph/Paragraph";
import Avatar from "../../../../shared/Avatar/Avatar";

function Review({ review }) {
  return (
    <StyledReview>
      <div>
        <Avatar src={review.userAvatar} alt="avatar" width="44" />
        <CardTitle>{review.userName}</CardTitle>
      </div>
      <Paragraph>{review.comment}</Paragraph>
    </StyledReview>
  );
}

export default Review;
