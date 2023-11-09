import styled from "styled-components";

export const AttributeTitles = styled.p`
  color: #f4f4f4;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25; /* 125% */
  letter-spacing: -0.16px;
`;

//=========================================

export const SetAttributeDiv = styled.div`
  //outline: 1px solid pink ;
  display: flex;
  flex-direction: row;
  row-gap: 64px;
  width: 100%;
  margin-right: auto;

  @media only screen and (min-width: 375px) {
    max-width: 240px;
    column-gap: 40px;
      //flex-wrap: wrap;
  }
  @media only screen and (min-width: 768px) {
    max-width: 474px;
    column-gap: 64px;
        //flex-wrap: wrap;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 110px;
    flex-direction: column;
    row-gap: 64px;
        //flex-wrap: nowrap;
  }

  //height: 450px;
  //display: inline-flex;
  //margin-left: 24px;
`;

export const SelectAudienceDiv = styled.div`
  width: 100%;

  @media only screen and (min-width: 375px) {
    max-width: 110px;
  }
  @media only screen and (min-width: 768px) {
    max-width: 110px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 110px;
    padding-top: 16px;
  }
`;

export const InputsWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
   width: 100%;

  @media only screen and (min-width: 375px) {
    max-width: 110px;
  }
  @media only screen and (min-width: 768px) {
    max-width: 110px;
  }
`;

export const ChooseAudienceLabel = styled.label`
  //display: inline-block;
  //vertical-align: middle;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: -0.16px;
  position: relative;
  padding-left: 21px;

    @media only screen and (min-width: 768px) {
      font-size: 16px;
  }

  & input {
    display: none;
  }

  & span {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    border: 1px solid #205bf1;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
  }

  & span:after {
    content: "";
    height: 7px;
    width: 7px;
    background: #205bf1;
    display: block;
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    //transition: 300ms ease-in-out 0s;
    left: 50%;
    top: 50%;
  }

  & input[type="radio"]:checked ~ span:after {
    transform: translate(-50%, -50%) scale(1);
  }
`;

//=========================================

export const StyledSelectDiv = styled.div`
  position: relative;
  width: 100%;
  max-width: 110px;

  &::after {
    content: url("../../../../shared/icons/icons.svg#icon-chevron-down");
    position: absolute;
    top: 50%;
    right: 10px;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%) scale(1);
    pointer-events: none;
    fill: white;
    stroke: white;
  }
`;

export const AttributeCategorySelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* position: absolute;
  top: 0;
  left: 0; */

  width: 100%;
  max-width: 110px;
  margin-top: 16px;
  padding: 0;
  background-color: transparent;
  color: var(--text-color-100);
  cursor: pointer;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  letter-spacing: -0.14px;
  border: none;
`;

//=========================================

export const SelectColorDiv = styled.div`
  display: flex;
  margin-top: 16px;

  @media only screen and (min-width: 375px){
      flex-direction: row;
    align-items: start;
      column-gap: 8px;
  }
  @media only screen and (min-width: 768px){
      flex-direction: row;
    align-items: start;
      column-gap: 8px;
  }

  @media only screen and (min-width: 1440px){
      flex-direction: column;
    align-items: start;
      row-gap: 8px;
  }
`;

export const ColorLabel = styled.label`
  & input {
    display: none;
  }
  & span {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    &.blue {
      background-color: #43a8d3;
    }
    &.viola {
      background-color: #6636c5;
    }
    &.orange {
      background-color: #e65368;
    }
  }
  & input[type="radio"]:checked + span {
    border: 1px solid #f4f4f4;
  }
`;

//=========================================
