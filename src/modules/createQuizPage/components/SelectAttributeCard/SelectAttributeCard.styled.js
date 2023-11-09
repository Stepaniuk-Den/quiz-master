import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";


const breakpoints = {
    tablet: `@media only screen and (min-width: 768px)`,
    desktop: `@media only screen and (min-width: 1279px)`,
};

export const AttributeTitles = styled.p`
color: #F4F4F4;
font-size: 16px;
font-weight: 700;
line-height: 1.25; /* 125% */
letter-spacing: -0.16px;
`;

//=========================================

export const SetAttributeDiv = styled.div`
//outline: 1px solid pink ;
display: flex;
flex-direction: column;
row-gap: 64px;
width: 100%;
max-width: 110px;
//height: 450px;
//display: inline-flex;
//margin-left: 24px;
`;

export const SelectAudienceDiv = styled.div`
padding-top: 16px;
`;

export const InputsWrapper = styled.div`
margin-top: 16px;
display: flex;
flex-direction: column;
row-gap: 12px;
`;

export const ChooseAudienceLabel = styled.label`
/* display: inline-block;
vertical-align: middle; */
cursor: pointer;
letter-spacing: -0.16px; 
position: relative;
padding-left: 21px;

& input{
display: none;
}

& span{
    height: 14px;
    width: 14px;
    border-radius: 50%;
    border: 1px solid #205BF1;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
}

& span:after{
    content: '';
    height: 7px;
    width: 7px;
    background: #205BF1;
    display: block;
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    //transition: 300ms ease-in-out 0s;
    left: 50%;
    top: 50%
}

& input[type="radio"]:checked ~ span:after{
    transform: translate(-50%, -50%) scale(1);
}
`;

//=========================================

export const AttributeCategorySelect = styled.select`
 appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 100%;
  max-width: 110px;
  margin-top: 16px;
  padding: 0;
  background-color: transparent;
  color: var(--text-color-100);

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
flex-direction: column;
align-items: start;
row-gap: 8px;
margin-top: 16px;
`;

export const ColorLabel = styled.label`
& input{
    display: none;
}
& span{
display: inline-block;
width: 40px;
height: 40px;
border-radius: 50%;
cursor: pointer;
&.blue{
background-color: #43A8D3;
}
&.viola{
background-color: #6636C5;
}
&.orange{
 background-color: #E65368;
}
}
& input[type="radio"]:checked + span{
border: 1px solid #F4F4F4;
}
`;

export const ColorInput = styled.input`
display: none;
`;

export const CustomIcon = styled.span`

`;

//=========================================

export const selectStyles = {
    control: (styles, state) => ({
        ...styles,
        width: '95px',
        maxHeight: '16px',
        padding: ' 0px 0px 0px 5px',
        fontSize: '16px',
        color: '#F4F4F4',
        backgroundColor: 'trasparent',
        border: state.isFocused ? 0 : 0,
        boxShadow: state.isFocused ? 0 : 0,
        '&:hover': {
            border: state.isFocused ? 0 : 0
        },
        cursor: 'pointer',
        [breakpoints.tablet]: {
            width: '105px',
        },
        [breakpoints.desktop]: {
            width: '110px',
        },
    }),
    valueContainer: styles => ({ ...styles, padding: '0', margin: '0', color: '#F4F4F4' }),
    indicatorSeparator: styles => ({ ...styles, display: 'none' }),
    dropdownIndicator: (styles, state) => ({
        ...styles,
        padding: '0',
        color: '#F4F4F4',
        transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    }),
    singleValue: styles => ({ ...styles, margin: '0', color: '#F4F4F4' }),
    input: styles => ({ ...styles, padding: '0', margin: '0', color: '#F4F4F4' }),
    menu: styles => ({
        ...styles,
        top: '90%',
        width: '100%',
        maxWidth: '95px',
        maxHeight: '90px',
        borderRadius: '15px',
        colore: '#F4F4F4',
        background: '#205BF1',
        backdropFilter: `blur(50px)`,
        overflow: 'auto',
        [breakpoints.tablet]: {
            maxWidth: '105px',
        },
        [breakpoints.desktop]: {
            maxWidth: '110px',
        },
    }),
    menuList: styles => ({
        ...styles,
        width: '100%',
        colore: '#F4F4F4',
        maxWidth: '95px',
        height: '90px',
        [breakpoints.tablet]: {
            maxWidth: '105px',
        },
        [breakpoints.desktop]: {
            maxWidth: '110px',
        },
        '::-webkit-scrollbar': {
            width: '8px',
            height: '0px',
            borderRadius: '15px',
        },
        '::-webkit-scrollbar-track': {
            backgroundColor: 'trasparent',
        },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: 'trasparent',
        },
        '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#F4F4F4',
        },
    }),
    option: (styles, state) => ({
        ...styles,
        cursor: 'pointer',
        color: '#F4F4F4',
        color: state.isSelected ? '#F4F4F4' : null,
        backgroundColor: state.isSelected ? '#06236b' : null,
        ':hover': {
            color: '#F4F4F4',
            backgroundColor: '#06236b',
        },
    }),
};

export const SelectIcon = styled(MdKeyboardArrowDown)`
  color: #F4F4F4;
  width: 14px;
  height: 14px;

 
`;
