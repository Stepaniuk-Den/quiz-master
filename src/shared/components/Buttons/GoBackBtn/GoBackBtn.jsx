import { BackArrow, BackText, GoBack, StyledLink } from "./GoBackBtn.styled";

const GoBackBtn = ({to}) => {
  return (
    <StyledLink to={to}>
      <GoBack>
        <BackArrow />
        <BackText>Back</BackText>
      </GoBack>
    </StyledLink>
  );
};

export default GoBackBtn;

//<GoBackBtn to="/"/>