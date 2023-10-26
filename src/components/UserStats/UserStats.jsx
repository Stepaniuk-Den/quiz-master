
import { InfoText, Line, TitleText, UserAvatar, UserCard, UserName } from "./UserStatsStyled";
import {infoUser} from "./info/infoUser";

const UserStats = () => {
  return (
      <UserCard>
          <UserAvatar src={infoUser.avatar} alt="user avatar"/>
          <UserName>{infoUser.userName}</UserName>
          <TitleText>Passed quizzes</TitleText>
          <InfoText>{infoUser.passedQuizzes}</InfoText>
          <Line/>
          <TitleText>Average success</TitleText>
          <InfoText>{infoUser.averageSuccess}%</InfoText>
    </UserCard>
  )
}

export default UserStats;