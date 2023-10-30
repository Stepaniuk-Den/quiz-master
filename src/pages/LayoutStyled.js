import styled from "styled-components";
import bgImg from '../shared/images/desktop/main-desktop@1x.webp'
import isPropValid from "@emotion/is-prop-valid";
export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  padding: 0 20px;
  max-width: 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    padding: 0 100px;
  }

  ${(props) =>
    props.hasbackground === "true" &&
    `
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: right top;
  `}
`;
