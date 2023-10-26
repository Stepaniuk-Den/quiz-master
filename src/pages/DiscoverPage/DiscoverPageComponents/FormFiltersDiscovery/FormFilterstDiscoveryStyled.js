import styled from "styled-components";
import { Select } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { makeStyles } from "@material-ui/core/styles";

export const FormFiltersWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const TextWrapper = styled.div`
  /* outline: 1px solid yellow; */
  /* height: 20px; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* align-items: center; */
  justify-content: space-between;
  @media (min-width: 768px) {
    gap: 24px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const ResultBox = styled.div`
  /* outline: 1px solid red; */
  /* width: 100%; */
  height: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SpanStyled = styled.span`
  display: block;
  color: var(--text-color-60);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.16px;
`;

export const PStyled = styled.p`
  display: block;
  color: var(--text-color-100);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.16px;
`;

export const RatingBox = styled.div`
  /* outline: 1px solid red; */
  height: 20px;
  display: flex;
  align-items: center;
  gap: 11px;
  @media (min-width: 768px) {
    gap: 12px;
  }
`;

export const RatingStars = styled.div`
  margin: 0;
  padding: 0;
  color: #f4f4f4;
  /* color: var(--star-color-100); */
  /* color: var(--star-color-8); */
`;

//////////////////////////////////////////////////////////

// export const SelectMUI = makeStyles((theme) => ({
//   select: {
//     width: "100%",
//     maxWidth: 335,
//     height: 48,
//     padding: "15px 18px",
//     borderRadius: 30,
//     border: "1px solid var(--border-color-30)",
//     backgroundColor: "transparent",
//     color: "var(--text-color-100)",
//     fontSize: 14,
//     fontStyle: "normal",
//     fontWeight: 400,
//     lineHeight: 1.29, /* 128.571% */
//     letterSpacing: -0.14,
//   },
// }));

export const SelectMUI = styled(Select)`
/* & .customSelect__ { */
.MuiSelect-root{
/* .myStyle{ */
  width: 100%;
  max-width: 335px;
  height: 48px;
  padding: 15px 18px;
  border-radius: 30px;
  border: 1px solid var(--border-color-30);
  background-color: transparent;
  color: var(--text-color-100);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29; /* 128.571% */
  letter-spacing: -0.14px;
}
`;
