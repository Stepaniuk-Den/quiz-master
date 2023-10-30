import { Main } from "../../modules/mainPage"
import { useSelector } from 'react-redux';
import { selectReviews, selectRandomAdult, selectRandomChildren } from "../../redux/selectors";

const MainPage = () => {
 
const reviews = useSelector(selectReviews);
const randomAdultQuizzes = useSelector(selectRandomAdult);
const randomChildrenQuizzes = useSelector(selectRandomChildren);

    return (
     <Main reviews={reviews} adultQuizzes={randomAdultQuizzes} childrenQuizzes={randomChildrenQuizzes}/>
    )
  }
  
  export default MainPage