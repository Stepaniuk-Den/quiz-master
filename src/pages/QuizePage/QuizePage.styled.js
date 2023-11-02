import styled from "styled-components";

import mobileBgQuizeImg from "../../shared/images/desktop/question-desktop@1x.webp";
import tabletBgQuizeImg from "../../shared/images/desktop/question-desktop@1x.webp";
import desktopBgQuizeImg from "../../shared/images/desktop/question-desktop@1x.webp";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.div`
  position: fixed;
  top: 235px; /* Расположение сверху */
  left: 189px; /* Расположение слева */
  z-index: -1; /* Помещаем изображение за контентом */
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    background-image: url(${mobileBgQuizeImg});
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${tabletBgQuizeImg});
  }

  @media (min-width: 1440px) {
    background-image: url(${desktopBgQuizeImg});
  }
`;
