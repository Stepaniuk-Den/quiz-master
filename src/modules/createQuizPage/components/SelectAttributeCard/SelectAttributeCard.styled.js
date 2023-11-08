import styled from "styled-components";


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
width: 100%;
max-width: 110px;
margin-top: 16px;
//color: white;
//background-color: transparent;
border-radius: 15px;
border:1px solid white;
//border: none;
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
