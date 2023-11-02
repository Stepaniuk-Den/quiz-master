import styled from "styled-components";
import backgroundImg from "../../modules/mainPage/images/splash-desktop@1x.webp";
// import backgroundImg2x from "../../modules/mainPage/images/splash-desktop@2x.webp";
// import backgroundTab from "../../modules/mainPage/images/splash-tablet@1x.webp";
// import backgroundTab2x from "../../modules/mainPage/images/splash-tablet@2x.webp";
// import backgroundMob from "../../modules/mainPage/images/splash-mobile@1x.webp";
// import backgroundMob2x from "../../modules/mainPage/images/splash-mobile@2x.webp";

export const PageWrapper = styled.div`
  outline: 1px solid green;
  padding: 64px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionWrapper = styled.section`
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow: hidden;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 407px 380px; */
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
`;
