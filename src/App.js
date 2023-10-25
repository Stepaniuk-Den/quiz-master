import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Layout from "./pages/Layout";
import "./App.css";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
const QuizListPage = lazy(() => import("./pages/QuizListPage"));
const QuizePage = lazy(() => import("./pages/QuizePage/QuizePage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LastQuizesPage = lazy(() =>
  import("./pages/LastQuizesPage/LastQuizesPage")
);
const DiscoverPage = lazy(() => import("./pages/DiscoverPage/DiscoverPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));
const OwnQuizPage = lazy(() => import("./pages/OwnQuizPage/OwnQuizPage"));
const CreateQuizPage = lazy(() =>
  import("./pages/CreateQuizPage/CreateQuizPage")
);
const SettingsPage = lazy(() => import("./pages/SettingsPage/SettingsPage"));
const FeedbackPage = lazy(() => import("./pages/FeedbackPage/FeedbackPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />}></Route>
            <Route path="/auth" element={<AuthPage />}></Route>
            <Route path="/quizlist" element={<QuizListPage />}></Route>
            <Route path="/quiz" element={<QuizePage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/lastquiz" element={<LastQuizesPage />}></Route>
            <Route path="/discover" element={<DiscoverPage />}></Route>
            <Route path="/favorite" element={<FavoritePage />}></Route>
            <Route path="/ownquiz" element={<OwnQuizPage />}></Route>
            <Route path="/createquiz" element={<CreateQuizPage />}></Route>
            <Route path="/settings" element={<SettingsPage />}></Route>
            <Route path="/feedback" element={<FeedbackPage />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

// import ReactDOM from 'react-dom';
// import { Router, Route, Routes } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// import './index.css';
// // import App from './App';
// import { lazy } from 'react'

// const history = createBrowserHistory();

// const MainPage = lazy(()=> import ('./pages/MainPage/MainPage'))
// //const Page1 = lazy(()=> import ('./pages/Page1/Page1'))
// //const Page2 = lazy(()=> import ('./pages/Page2/Page2'))

// ReactDOM.render(
//   <Router history={history}>
//     <Routes>
//       <Route path="/" element={<MainPage />} />
//     </Routes>
//   </Router>,
//   document.getElementById('root')
// );

// export default App;
