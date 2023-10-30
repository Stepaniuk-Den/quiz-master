import styled from "styled-components";
import { HiArrowLongLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

export const GoBack = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 100px;
`;

export const BackArrow = styled(HiArrowLongLeft)`
  width: 24px;
  height: 24px;
  color: var(--text-color-100);
  margin-right: 6px;
`;

export const BackText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: var(--text-color-100);
`;

export const StyledLink = styled(NavLink)`
    cursor: pointer;
`
