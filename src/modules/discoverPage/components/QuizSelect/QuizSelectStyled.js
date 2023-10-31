import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

// export const SelectStyled = styled.select`
//   width: 100%;
//   max-width: 335px;
//   height: 50px;
//   padding: 15px 18px;
//   border-radius: 30px;

//   border: 1px solid var(--border-color-30);
//   background-color: transparent;
//   /* color: #F4F4F4; */
//   color: var(--text-color-100);
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 1.29; /* 128.571% */
//   letter-spacing: -0.14px;

//   &.filters {
//     width: 94px;
//   }

//   &.forChildren {
//     width: 131px;
//   }
//   &.forAdults {
//     width: 121px;
//   }
// `;

// export const Options = styled.option`
//   background: var(--blue-background);
//   color: var(--text-color-100);
//   border-radius: 20px;
//   `;

// export const FiSearchS = styled(FiSearch)`
// outline: 1px solid red;
//   width: 14px;
//   height: 14px;
// `;
export const SelectWrapper = styled.div`
position: relative;
display: flex;
gap: 8px;
`

export const ButtonStyled = styled.button`
  /* position: relative; */
  width: 100%;
  max-width: 335px;
  height: 50px;
  padding: 15px 18px;
  border-radius: 30px;

  border: 1px solid var(--border-color-30);
  background-color: transparent;
  /* color: #F4F4F4; */
  color: var(--text-color-100);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29; /* 128.571% */
  letter-spacing: -0.14px;

  &.filters {
    width: 94px;
  }

  &.forChildren {
    width: 131px;
  }
  &.forAdults {
    width: 121px;
  }
`;

export const OptionsList = styled.ul`
outline: 1px solid red;
position: absolute;
left: 0;
top: calc(100% + 8px);
width: 100%;
padding: 15px;
background: var(--blue-background);
border-radius: 20px;
color: var(--text-color-100);


`

export const OptionS = styled.li`  
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const FiSearchS = styled(FiSearch)`
  outline: 1px solid red;
  width: 14px;
  height: 14px;
`;
