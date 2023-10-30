import { useSelector } from 'react-redux'
import { selectIsAuth } from '../redux/user/userSelectors'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const isAuth = useSelector(selectIsAuth);
  return !!isAuth ? children : <Navigate to="" />
//   /registerForm
// /auth/registerForm
};

export default PrivateRoute;
