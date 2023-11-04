import { useEffect, useState } from "react";
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import { PageWrapper, SectionWrapper } from "./DiscoverPageStyled";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import QuizeFilterTools from "../../modules/discoverPage/components/QuizFilterTools/QuizFilterTools";
import { getFilteredQuizzes, getQuizCategories } from "../../api/quiz";



const DiscoverPage = () => {

  ////////////////////////api////////////////////////////
  const [childrenCategories, setChildrenCategories] = useState([]);
  // console.log("childrenCategories: ", childrenCategories);
  const [adultCategories, setAdultCategories] = useState([]);
  // console.log("adultCategories: ", adultCategories);
  console.log("render");
  

  ////////////////////////////////////////////////////
  const [selectTitles, setSelectTitles] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [starSelect, setStarSelect] = useState(0);
  const [selectedQuizesArr, setSelectedQuizesArr] = useState({
    totalResults: 0,
    filteredQuizes: null,
  });

  //let prevCategoryNameLength = 0;

  if (!childrenCategories?.length) {
    const funcChildren = async () => {
      const allChildrenCategories = await getQuizCategories("children");
      setChildrenCategories(allChildrenCategories.children);
    };
    funcChildren();
  }
  if (!adultCategories?.length) {
    //console.log(adultCategories);
    const funcAdult = async () => {
      const allAdultCategories = await getQuizCategories("adults");
      setAdultCategories(allAdultCategories);
    };
    funcAdult();
  }

  useEffect(() => {
    // if (!childrenCategories?.length) {
    //   const funcChildren = async () => {
    //     const allChildrenCategories = await getQuizCategories("children");
    //     setChildrenCategories(allChildrenCategories.children);
    //   };
    //   funcChildren();
    // }
    // if (!adultCategories?.length) {
    //   //console.log(adultCategories);
    //   const funcAdult = async () => {
    //     const allAdultCategories = await getQuizCategories("adults");
    //     setAdultCategories(allAdultCategories);
    //   };
    //   funcAdult();
    // }
              
  }, [adultCategories, childrenCategories]);

  // useEffect(() => {
  //   const filteredOnChildren = allQuizzesArr?.filter((quiz) =>
  //     categoryName?.includes(quiz?.categoryName)
  //   );
  //   // console.log('filteredOnChildrenLength: ', filteredOnChildren.length);
  //   // console.log('filteredOnChildren: ', filteredOnChildren);
  //   const filteredOnStars = allQuizzesArr.filter(
  //     (quiz) => Math.round(quiz.rate) === starSelect
  //   );
  //   // console.log("filteredOnStars: ", filteredOnStars);

  //   const commonTotalResults =
  //     filteredOnChildren.length + filteredOnStars.length;
  //   setSelectedQuizesArr((prevSelectedQuizesArr) => ({
  //     totalResults: commonTotalResults,
  //     filteredQuizes: [...filteredOnChildren, ...filteredOnStars],
  //   }));
  // }, [categoryName, starSelect]);

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
    setSelectTitles((prevSelectTitles) =>
      prevSelectTitles.includes(selectTitle)
        ? [...prevSelectTitles]
        : [...prevSelectTitles, selectTitle]
    );
  };

  // console.log("categoryName", categoryName);
  const funkSelected = async () => {
    const selectedApi = await getFilteredQuizzes(categoryName);
    console.log("selectedApi: ", selectedApi.length);

    //const apiResponceLength = selectedApi.length;
    // setSelectedQuizesArr((prevSelectedQuizesArr) => ({
    //   totalResults: apiResponceLength,
    //   filteredQuizes: [...selectedApi],
    // }));
  };

  

  const handleStarSelection = (data) => {
    // console.log("dataStars", data)
    setStarSelect(data);
    // setSelectedQuizesArr((prevSelectedQuizesArr) => ({
    //   // totalResults: prevSelectedQuizesArr.totalResults + filteredOnStars.length,
    //   totalResults: filteredOnStars.length,
    //   filteredQuizes: [...filteredOnStars],
    // }));
  };

  return (
    <PageWrapper>
      <SectionWrapper>
        <PageTopBar titlePage="Discover" />
        <QuizeFilterTools
          handleStarSelection={handleStarSelection}
          handleCategorySelection={handleCategorySelection}
          totalResults={selectedQuizesArr.totalResults}
          selectTitles={selectTitles}
          categoryName={categoryName}
          childrenCategories={childrenCategories}
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
