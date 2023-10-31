import { Main } from "../../modules/mainPage"
import { useSelector, useDispatch } from 'react-redux';
import { selectReviews, selectRandomAdult, selectRandomChildren } from "../../redux/selectors";
import { selectIsAuth } from "../../redux/user/userSelectors";
import { getRandomQuizzesThunk, getTotalPassedThunk } from "../../redux/quiz/quizThunks";
import { useEffect } from 'react';

const MainPage = () => {
const dispatch = useDispatch();
const reviews = useSelector(selectReviews);
const randomAdultQuizzes = useSelector(selectRandomAdult);
const randomChildrenQuizzes = useSelector(selectRandomChildren);
const user = useSelector(selectIsAuth);

// dispatch(getTotalPassedThunk())

const handleChooseTest = () =>{

}

const handleCreateTest = () =>{
  
}

const handleSeeAll = () =>{
  
}

// useEffect(() => {
//   if (!randomAdultQuizzes || !randomChildrenQuizzes) {
//       dispatch(getRandomQuizzesThunk({page: 1, limit: 8}));
//   }
// }, [dispatch, randomAdultQuizzes, randomChildrenQuizzes]);

    return (
     <Main data={{user, reviews, randomAdultQuizzes, randomChildrenQuizzes}}/>
    )
  }
  
  export default MainPage