import { useSelector } from 'react-redux'
import { selectIsAuth, selectToken } from '../redux/user/userSelectors'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
    // const isAuth = useSelector(selectIsAuth);

    // const { isAuth, isRefreshing } = useAuth();
    // const shouldRedirect = !!isRefreshing && !!isAuth; 

    const {hasToken} = useAuth();

  // return shouldRedirect ? children : <Navigate to="/" /> ;

  return !!hasToken ? children : <Navigate to="/" />;

//   /registerForm
// /auth/registerForm
};

export default PrivateRoute;
