import { StyledMediumBtn } from "./MediumBtn.styled";

const MediumBtn = ({text, type}) => {
const handleBtnStart = () => {
    console.log("MediumAccentBtn clicked!");
}

  return (
      <StyledMediumBtn type="button" onClick={handleBtnStart} className={type ? type : ""}>
        {text}
      </StyledMediumBtn>
  );
};

export default MediumBtn;