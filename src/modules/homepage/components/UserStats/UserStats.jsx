import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../../../shared/components/Avatar/Avatar";
import { InfoText, Line, LineHeight, PassedBox, TitleText, UserAvatar, UserCard, UserName } from "./UserStatsStyled";
import {infoUser} from "./info/infoUser";
import { selectUserAvatar } from "../../../../redux/user/userSelectors";
import { getTotalPassedThunk } from "../../../../redux/quiz/quizThunks";
import { useEffect, useState } from "react";
import { currentUserThunk } from "../../../../redux/user/userThunks";

const UserStats = () => {
  const dispatch = useDispatch();
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    dispatch(currentUserThunk()).then((data) => {
      setFetchedData(data.payload);
    });
  }, [dispatch]);

const averageSuccess = fetchedData ? Math.round(fetchedData.average) : '';

  return (
    <UserCard>
      <Avatar size="large" src={fetchedData ? fetchedData.avatar : ''} alt="User avatar" width="100px" />
      <UserName>{fetchedData ? fetchedData.name : ''}</UserName>
      <PassedBox>
        <div>
          <TitleText>Passed quizzes</TitleText>
          <InfoText>{fetchedData ? fetchedData.passedQuizzes.length : ''}</InfoText>
        </div>
          
        <Line />
        <LineHeight/>
        <div>
          <TitleText>Average success</TitleText>
          <InfoText>{fetchedData ? `${averageSuccess}%` : ''}</InfoText>
        </div>
      </PassedBox>
    </UserCard>
  );
}

export default UserStats;
