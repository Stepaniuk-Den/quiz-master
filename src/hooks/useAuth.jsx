import { useSelector } from "react-redux";
import {
  selectIsAuth,
  selectIsRefreshing,
  selectToken,
  selectUser,
} from "../redux/user/userSelectors";

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    isAuth: useSelector(selectIsAuth),
    hasToken: useSelector(selectToken),
    isRefreshing: useSelector(selectIsRefreshing),
  };
};
