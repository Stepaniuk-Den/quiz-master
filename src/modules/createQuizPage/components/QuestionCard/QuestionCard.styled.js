import styled from "styled-components";

import {PiPlus} from 'react-icons/pi'

export const ImageWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 120px;
height: 120px;

border-radius: 50%;
border: 1px solid #205BF1;

background-color: #205BF1;
`;

export const StyledPlus = styled(PiPlus)`
width: 41px;
height: 41px;
`;