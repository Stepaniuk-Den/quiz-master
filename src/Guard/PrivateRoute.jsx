import { useSelector } from 'react-redux'
import { selectIsAuth } from '../redux/user/userSelectors'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
    // const isAuth = useSelector(selectIsAuth);
    const { isAuth, isRefreshing } = useAuth();
    const shouldRedirect = !isRefreshing && !isAuth; 

  return shouldRedirect ? <Navigate to="/" /> : children;
//   /registerForm
// /auth/registerForm
};

export default PrivateRoute;
