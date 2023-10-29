import { StyledMediumBtn } from "./MediumBtn.styled";

const MediumBtn = ({children, type}) => {
const handleBtnStart = () => {
    console.log("MediumAccentBtn clicked!");
}

  return (
      <StyledMediumBtn type="button" onClick={handleBtnStart} className={type ? type : ""}>
        {children}
      </StyledMediumBtn>
  );
};

export default MediumBtn;