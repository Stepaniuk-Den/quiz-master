import { useSelector } from "react-redux"
import { selectIsAuth, selectToken } from "../redux/user/userSelectors"
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


const PublicRoute = ({children}) => {
    // const isAuth = useSelector(selectIsAuth);

    const {hasToken} = useAuth();

  //   const {isAuth} = useAuth();
    
  // return !isAuth ? children : <Navigate to="/home" />

  return !hasToken ? children : <Navigate to="/home" />;

}

export default PublicRoute;
