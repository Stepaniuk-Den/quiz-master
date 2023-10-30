import styled from "styled-components";
import { Rating } from "@mui/material";

export const RatingBox = styled.div`
  margin: 0;
  padding: 0;  
`;

export const RatingS = styled(Rating)({
  "& .MuiRating-iconFilled": {    
    color: "var(--star-color-100)",
  },
  "& .MuiRating-iconEmpty": {
    // color: "red",
    color: "var(--star-color-8)", 
  },
});