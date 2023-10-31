import { RatingBox, RatingS } from "./RatingStarsStyled";

const RatingStars = ({rate}) => {
  return (
    <>
      <RatingBox>
        <RatingS name="read-only" value={rate} precision={0.1} readOnly />
      </RatingBox>
    </>
  );
};

export default RatingStars;
