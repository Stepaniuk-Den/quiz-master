import styled from "styled-components";
// import { Select } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { makeStyles } from "@material-ui/core/styles";

export const SelectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
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

// export const SelectMUI = styled(Select)`
// /* & .customSelect__ { */
// /* .MuiSelect-root{ */
// /* .myStyle{ */
//   width: 100%;
//   max-width: 335px;
//   height: 48px;
//   padding: 15px 18px;
//   border-radius: 30px;
//   border: 1px solid var(--border-color-30);
//   background-color: transparent;
//   color: var(--text-color-100);
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 1.29; /* 128.571% */
//   letter-spacing: -0.14px;
// /* } */
// `;
