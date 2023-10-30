import styled from "styled-components";
import backgroundImg from "../../images/splash-desktop@1x.webp";
import backgroundImg2x from "../../images/splash-desktop@2x.webp";

export const StyledNavBlock = styled.section`
  width: 100%;

  div {
    height: 380px;
    width: auto;
    padding: 88px 64px;
    border-radius: 30px;
    overflow: hidden;
    background-color: var(--blue-background);
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 407px 380px;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    div {
      background-image: url(${backgroundImg2x});
      background-repeat: no-repeat;
      background-position: right center;
      background-size: 407px 380px;
    }
  }

  h2 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 32px;
    width: 683px;
  }

  button {
    margin-right: 14px;
  }
`;
