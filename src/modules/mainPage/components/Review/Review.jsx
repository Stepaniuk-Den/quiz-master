import { StyledReview } from "./Review.styled";
import CardTitle from "../../../../shared/CardTitle/CardTitle";
import Paragraph from "../../../../shared/Paragraph/Paragraph";
import Avatar from "../../../../shared/Avatar/Avatar";

function Review() {
  return (
    <StyledReview>
      <Avatar src="https://c.files.bbci.co.uk/9270/production/_126588473_boris_1221_getty.jpg" alt="avatar" width="44"/>
      <CardTitle>Name</CardTitle>
      <Paragraph>
        Excellent platform, I myself passed more than one quiz, I recommended it
        to friends. You can conveniently create your own quizzes, for this
        special thanks.
      </Paragraph>
    </StyledReview>
  );
}

export default Review;
