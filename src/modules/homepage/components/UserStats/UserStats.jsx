
import { useSelector } from "react-redux";
import Avatar from "../../../../shared/components/Avatar/Avatar";
import { InfoText, Line, LineHeight, PassedBox, TitleText, UserAvatar, UserCard, UserName } from "./UserStatsStyled";
import {infoUser} from "./info/infoUser";
import { selectUserAvatar } from "../../../../redux/user/userSelectors";

const UserStats = () => {
const userAvatar = useSelector(selectUserAvatar);
  return (
    <UserCard>
      <Avatar size="large" src={infoUser.avatar} alt="User avatar" width="100px"/>
      <UserName>{infoUser.userName}</UserName>
      <PassedBox>
        <div>
          <TitleText>Passed quizzes</TitleText>
          <InfoText>{infoUser.passedQuizzes}</InfoText>
        </div>
          
        <Line />
        <LineHeight/>
        <div>
          <TitleText>Average success</TitleText>
        <InfoText>{infoUser.averageSuccess}%</InfoText>
        </div>
          
        </PassedBox>
    </UserCard>
  )
}

export default UserStats;