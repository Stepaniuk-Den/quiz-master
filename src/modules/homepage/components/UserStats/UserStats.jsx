import { useSelector } from "react-redux";
import Avatar from "../../../../shared/components/Avatar/Avatar";
import {
  InfoText,
  Line,
  LineHeight,
  PassedBox,
  TitleText,
  // UserAvatar,
  UserCard,
  UserName,
} from "./UserStatsStyled";
import { selectUser } from "../../../../redux/user/userSelectors";

const UserStats = () => {
  const userInfo = useSelector(selectUser);
  const averageSuccess = userInfo ? Math.round(userInfo.average) : "";

  return (
    <UserCard>
      <Avatar
        size="large"
        src={userInfo ? userInfo.userAvatar : ""}
        alt="User avatar"
        width="100px"
      />
      <UserName>{userInfo ? userInfo.name : ""}</UserName>
      <PassedBox>
        <div>
          <TitleText>Passed quizzes</TitleText>
          <InfoText>{userInfo ? userInfo.passedQuizzes.length : ""}</InfoText>
        </div>

        <Line />
        <LineHeight />
        <div>
          <TitleText>Average success</TitleText>
          <InfoText>{userInfo ? `${averageSuccess}%` : ""}</InfoText>
        </div>
      </PassedBox>
    </UserCard>
  );
};

export default UserStats;
