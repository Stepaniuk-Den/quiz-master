import { StyledStats } from "./Stats.styled";
import { Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectTotal } from "../../../../redux/selectors";
import Paragraph from "../../../../shared/components/Paragraph/Paragraph";

function Stats() {
  const total = useSelector(selectTotal);
  
  return (
    <StyledStats>
      <h2>{total}</h2>
      <Paragraph>People passed the quiz</Paragraph>
      <div>
        <p>© QuizMaster 2023 All rights reserved</p>
        <ul>
          <li>
          <Link to='/'>Privacy Policy</Link>
          </li>
          <li>
          <Link to='/'>Terms of Service</Link>
          </li>
        </ul>
      </div>
    </StyledStats>
  );
}

export default Stats;
