import { useSelector } from "react-redux"
import { selectIsAuth } from "../redux/user/userSelectors"
import { Navigate } from "react-router-dom";


const PublicRoute = ({children}) => {
    const isAuth = useSelector(selectIsAuth);
    
  return !isAuth ? children : <Navigate to="/home" />
//   home
}

export default PublicRoute;
