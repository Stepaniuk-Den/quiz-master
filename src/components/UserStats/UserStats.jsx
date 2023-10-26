
import { InfoText, Line, TitleText, UserCard } from "./UserStatsStyled";
import {infoUser} from "./info/infoUser";

const UserStats = () => {
  return (
      <UserCard>
          <img src={infoUser.avatar} alt="" width="100" height="100" />
          <InfoText>{infoUser.userName}</InfoText>
          <TitleText>Passed quizzes</TitleText>
          <InfoText>{infoUser.passedQuizzes}</InfoText>
          <Line/>
          <TitleText>Average success</TitleText>
          <InfoText>{infoUser.averageSuccess}%</InfoText>
    </UserCard>
  )
}

export default UserStats;