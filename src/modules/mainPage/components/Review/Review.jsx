import { StyledReview } from "./Review.styled";
import CardTitle from "../../../../shared/components/CardTitle/CardTitle";
import Paragraph from "../../../../shared/components/Paragraph/Paragraph";
import Avatar from "../../../../shared/components/Avatar/Avatar";

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
