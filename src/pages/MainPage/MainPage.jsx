import { Main } from "../../modules/mainPage"
import { useSelector } from 'react-redux';
import { selectReviews } from "../../redux/selectors";

const MainPage = () => {
 
const reviews = useSelector(selectReviews)
    return (
     <Main reviews={reviews}/>
    )
  }
  
  export default MainPage