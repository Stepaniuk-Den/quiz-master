import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { RatingS } from "./RatingStarsRadioStyled";

const RatingStarsRadio = () => {
  const [value, setValue] = useState(1);

  const handleStarChange = (starsQty) => {
    console.log(starsQty);
    setValue(starsQty);
  };

  return (
    <>      
      <RatingS
        name="simple-controlled"
        value={value}
        emptyIcon={<StarIcon />}
        onChange={(evt, newValue) => {
          handleStarChange(newValue);
        }}
      />
    </>
  );
};

export default RatingStarsRadio;
