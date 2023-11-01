import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import { PageWrapper, SectionWrapper } from "./DiscoverPageStyled";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import QuizeFilterTools from "../../modules/discoverPage/components/QuizFilterTools/QuizFilterTools";
//import { useSelector } from "react-redux";
//import { selectDiscoverAdult, selectDiscoverChildren } from "../../redux/selectors";
import { useEffect, useState } from "react";

const allQuizzesArr = [
  {
    _id: "653b7ab5frvf4cc7fb04f0a2",
    quizName: "Quiz 1",
    rate: 5.0,
    totalPassed: 10,
    categoryName: "Nature",
    quizType: "children",
    quizCategory: "65398da95191746edd434971",
    isFavorite: true,
  },
  {
    _id: "653b7ab5f1tr44cc7fb04f0a2",
    quizName: "Quiz 2",
    rate: 4.6,
    totalPassed: 15,
    categoryName: "Science",
    quizType: "adult",
    quizCategory: "65398da95191746edd434971",
    isFavorite: true,
  },
  {
    _id: "653b7ab5f18hjkcc7fb04f0a2",
    quizName: "Quiz 3",
    rate: 4.3,
    totalPassed: 20,
    categoryName: "Literature",
    quizType: "children",
    quizCategory: "65398da95191746edd434971",
    isFavorite: true,
  },
  {
    _id: "653b7ab5f18b4rerefb04f0a2",
    quizName: "Quiz 4",
    rate: 4.0,
    totalPassed: 12,
    categoryName: "Cars",
    quizType: "adult",
    quizCategory: "65398da95191746edd434971",
    isFavorite: true,
  },
  {
    _id: "653b7ab5f18b4tyrer7fb04f0a2",
    quizName: "Quiz 5",
    rate: 3.0,
    totalPassed: 18,
    categoryName: "Comics",
    quizType: "children",
    quizCategory: "65398da95191746edd434971",
    isFavorite: true,
  },
  {
    _id: "653b7ab5f18berr7fb04f0a2",
    quizName: "Quiz 6",
    rate: 4.9,
    totalPassed: 9,
    categoryName: "Architecture",
    quizType: "adult",
    quizCategory: "65398da95191746edd434971",
    isFavorite: true,
  },
  {
    _id: "653b7ab5f18berr7fb04f0a3",
    quizName: "Quiz 6",
    rate: 1.9,
    totalPassed: 9,
    categoryName: "Cars",
    quizType: "adult",
    quizCategory: "65398da95191746edd434971",
    isFavorite: true,
  },
  {
    _id: "653b7ab5f18b4cc7fb04frr",
    quizName: "Quiz 7",
    rate: 5.0,
    totalPassed: 22,
    categoryName: "Nature",
    quizType: "children",
    quizCategory: "65398da95191746edd434971",
    isFavorite: true,
  },
];

const DiscoverPage = () => {
  // const allAdultCategories = useSelector(selectDiscoverAdult)
  // console.log('allAdultCategories: ', allAdultCategories);
  // const allChildrenCategories = useSelector(selectDiscoverChildren)
  // console.log('allChildrenCategories: ', allChildrenCategories);
  const [selectTitles, setSelectTitles] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [starSelect, setStarSelect] = useState(0)
  const [selectedQuizesArr, setSelectedQuizesArr] = useState({
    totalResults: 0,
    filteredQuizes: null,
  });

  useEffect(() => {    
    const filteredOnChildren = allQuizzesArr?.filter((quiz) => categoryName?.includes(quiz?.categoryName));
    // console.log('filteredOnChildrenLength: ', filteredOnChildren.length);
    // console.log('filteredOnChildren: ', filteredOnChildren);
    const filteredOnStars = allQuizzesArr.filter(
      (quiz) => Math.round(quiz.rate) === starSelect
    );
    // console.log("filteredOnStars: ", filteredOnStars);

    const commonTotalResults = filteredOnChildren.length + filteredOnStars.length
    console.log('commonTotalResults: ', commonTotalResults);

    // setSelectedQuizesArr((prevSelectedQuizesArr) => ({
    //   // totalResults: prevSelectedQuizesArr.totalResults + filteredOnStars.length,
    //   totalResults: filteredOnStars.length,
    //   filteredQuizes: [...filteredOnStars],
    // }));

    //  setSelectedQuizesArr((prevSelectedQuizesArr) => ({
    //     totalResults: filteredOnChildren.length,
    //     filteredQuizes: [...filteredOnChildren],
    //   }));

    
      setSelectedQuizesArr((prevSelectedQuizesArr) => ({
        totalResults: commonTotalResults,
        filteredQuizes: [...filteredOnChildren, ...filteredOnStars],
      }));


  }, [categoryName, starSelect, selectTitles]);

  const handleCategorySelection = (data, selectTitle) => {
    //  console.log("data", data)
    const isChecked = data.target.checked;
    const selectedCategoryName = data.target.value;    

    if (isChecked) {
      setCategoryName((prevCategoryName) => [
        ...prevCategoryName,
        selectedCategoryName,
      ]);
    } else {
      const updatedCategoryName = categoryName.filter(
        (name) => name !== selectedCategoryName
      );
      setCategoryName(updatedCategoryName);
    }
    
    // setSelectTitles((prevSelectTitles) => [...prevSelectTitles, selectTitle]);

    // const filteredOnChildren = allQuizzesArr.filter((quiz) => categoryName.includes(quiz.categoryName));
    // console.log('filteredOnChildrenLength: ', filteredOnChildren.length);
    // console.log('filteredOnChildren: ', filteredOnChildren);
    //  setSelectedQuizesArr((prevSelectedQuizesArr) => ({
    //     totalResults: filteredOnChildren.length,
    //     filteredQuizes: [...filteredOnChildren],
    //   }));
  };

  const handleStarSelection = (data) => {
    // console.log("dataStars", data)
    setStarSelect(data);
    // const filteredOnStars = allQuizzesArr.filter(
    //   (quiz) => Math.round(quiz.rate) === data
    // );
    // console.log("filteredOnStars: ", filteredOnStars);
    // setSelectedQuizesArr((prevSelectedQuizesArr) => ({
    //   // totalResults: prevSelectedQuizesArr.totalResults + filteredOnStars.length,
    //   totalResults: filteredOnStars.length,
    //   filteredQuizes: [...filteredOnStars],
    // }));
  };
  console.log("selectTitles: ", selectTitles);
  console.log("categoryName: ", categoryName);
  console.log(selectedQuizesArr);

  return (
    <PageWrapper>
      <SectionWrapper>
        <PageTopBar titlePage="Discover" />
        <QuizeFilterTools
          handleStarSelection={handleStarSelection}
          handleCategorySelection={handleCategorySelection}
          totalResults={selectedQuizesArr.totalResults}
        />
        <QuizesList
          quizzesArr={selectedQuizesArr.filteredQuizes}
          className={"bottomVariant"}
        />
        <BtnLoadMore />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default DiscoverPage;
