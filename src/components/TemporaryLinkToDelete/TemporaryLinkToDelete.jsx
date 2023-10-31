import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleShowAuthPage } from "../../redux/Modal/modalSlice";

const TemporaryLinkToDelete = () => {
  // ====================
  const dispatch = useDispatch();
  const handleOpenModal = (e) => {
    dispatch(toggleShowAuthPage(e.currentTarget.name));
  };
  // ===================

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      <Link to="/" style={{ color: "lime" }}>
        MainPage |
      </Link>
      <Link to="/auth" style={{ color: "lime" }}>
        AuthPage |
      </Link>
      <Link to="/quizlist" style={{ color: "lime" }}>
        QuizListPage |
      </Link>
      <Link to="/quiz" style={{ color: "lime" }}>
        QuizePage |
      </Link>
      <Link to="/home" style={{ color: "lime" }}>
        HomePage |
      </Link>
      <Link to="/lastquiz" style={{ color: "lime" }}>
        LastQuizesPage |
      </Link>
      <Link to="/discover" style={{ color: "lime" }}>
        DiscoverPage |
      </Link>
      <Link to="/favorite" style={{ color: "lime" }}>
        FavoritePage |
      </Link>
      <Link to="/ownquiz" style={{ color: "lime" }}>
        OwnQuizPage |
      </Link>
      <Link to="/createquiz" style={{ color: "lime" }}>
        CreateQuizPage |
      </Link>
      <Link to="/settings" style={{ color: "lime" }}>
        SettingsPage |
      </Link>
      <Link to="/feedback" style={{ color: "lime" }}>
        FeedbackPage |
      </Link>
      <Link to="/randomquiz" style={{ color: "red" }}>
        RandomQuizPage |
      </Link>

      {/* Auth buttons */}

      <Link to="/auth/loginForm">
        <button type="button" onClick={handleOpenModal}>
          Login
        </button>
      </Link>

      <Link to="/auth/RegisterForm">
        <button type="submit" onClick={handleOpenModal}>
          Register
        </button>
      </Link>
    </div>
  );
};

export default TemporaryLinkToDelete;

// const handleLogOut = () => {
//   dispatch(logOutUserThunk());
//   // dispatch(toggleShowAuthPage(''));
//   onClose();
// };

// ===================
// HOMEPAGE
// const isAuth = useSelector(selectIsAuth);
//   useEffect(() => {
//     if (!isAuth) return;
//     // dispatch(getTransCategoriesThunk(token));
//   });

// isAuth && ()
