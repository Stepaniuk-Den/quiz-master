import styled from "styled-components";
import { HiArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

// export const GoBack = styled.div`
//   display: flex;
//   align-items: flex-end;
//   max-width: 72px;
//   height: 24px;
//   margin-bottom: 16px;
// `;

export const BackArrow = styled(HiArrowLongLeft)`
  width: 24px;
  height: 24px;
  color: var(--text-color-100);
  margin-right: 6px;
`;

export const BackText = styled.span`
  line-height: 20px;
  color: var(--text-color-100);
`;

export const StyledLink = styled(Link)`
outline: 1px solid yellow;
display: flex;
align-items: center;
max-width: 72px;
height: 24px;
margin-bottom: 16px;
cursor: pointer;
`;
