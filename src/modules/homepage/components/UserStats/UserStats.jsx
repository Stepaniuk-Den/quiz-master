
import { InfoText, Line, LineHeight, PassedBox, TitleText, UserAvatar, UserCard, UserName } from "./UserStatsStyled";
import {infoUser} from "./info/infoUser";

const UserStats = () => {
  return (
      <UserCard>
          <UserAvatar src={infoUser.avatar} alt="user avatar"/>
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