import styled from "styled-components";
import backgroundImg from "../../images/footer-desktop@1x.webp";
import backgroundImg2x from "../../images/footer-desktop@2x.webp";

export const StyledStats = styled.footer`
  width: 100%;
  height: 360px;
  padding: 64px 0 20px 0;
  background-color: var(--accent-color);
  color: var(--text-color-100);

  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 314px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${backgroundImg2x});
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 314px;
  }

  h2 {
    text-align: center;
    font-size: 120px;
    letter-spacing: -1.2px;
    line-height: 110px;
    font-family: GilroyBold, sans-serif;
    font-weight: normal;
    margin-bottom: 12px;
  }

  h2 + p {
    text-align: center;
    margin-bottom: 112px;
  }

  div {
    display: flex;
    gap: 40px;
    justify-content: center;
  }

  ul {
    display: flex;
    gap: 12px;
  }

  div > p {
    font-family: GilroyBold, sans-serif;
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
  }

  a {
    color: var(--text-color-50);
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
  }
`;
