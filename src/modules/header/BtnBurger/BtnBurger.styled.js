import styled from "styled-components";
import { FiAlignJustify } from "react-icons/fi"

export const StyledBtnBurger = styled.div`
position: absolute;
top: 50%;
right: 0;
display: flex;
justify-content: center;
transform: translateY(-50%);
/* align-self: center; */
width: 32px;
height: 32px;
`;

export const Burger = styled(FiAlignJustify)`
  width: 28px;
  height: 28px;
  stroke: var(--text-color-100);
`;