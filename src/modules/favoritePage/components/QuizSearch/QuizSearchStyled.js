import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const FormWrapper = styled.form`
position: relative;
`
export const BtnSearch = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: transparent;
  top: 50%;
  transform: translateY(-50%);
  left: 18px;
`;

export const FiSearchS = styled(FiSearch)`
  /* outline: 1px solid red; */
  width: 14px;
  height: 14px;
  stroke: var(--text-color-100);
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  /* margin-bottom: 20px; */
  @media (min-width: 768px) {
    /* margin-bottom: 24px; */
  }
`;


