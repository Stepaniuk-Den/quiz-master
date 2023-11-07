import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import { PageWrapper, SectionWrapper } from "./DiscoverPageStyled";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import QuizeFilterTools from "../../modules/discoverPage/components/QuizFilterTools/QuizFilterTools";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredQuizzesThunk,
  getQuizCategoriesThunk,
} from "../../redux/quiz/quizThunks";
import { selectDiscoverFilteredQuizes } from "../../redux/selectors";
import { updateFiltered } from "../../redux/quiz/quizSlice";

const DiscoverPage = () => {
  console.log("render");
  const filteredQuizes = useSelector(selectDiscoverFilteredQuizes);
  console.log('filteredQuizes: ', filteredQuizes);
  const [discoverRender, setDiscoverRender] = useState(null);
  const [categoryNames, setCategoryNames] = useState([]);
  const [childrenCategoryNames, setChildrenCategoryNames] = useState([]);
  const [adultCategoryNames, setAdultCategoryNames] = useState([]);
  const [commonFilter, setCommonFilter] = useState({
    ratingStars: null,
    categoryNames: [],
  });
  // console.log('selectTitles: ', selectTitles);
  // console.log("categoryNames: ", categoryNames);
  // console.log("commonFilter: ", commonFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(1);
    dispatch(getQuizCategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    if (!commonFilter.ratingStars && !commonFilter.categoryNames.length) return;
    console.log("commonFilter changed");
    dispatch(getFilteredQuizzesThunk(commonFilter));
  }, [dispatch, commonFilter]);

  useEffect(() => {
    if (!categoryNames?.length) {
      dispatch(updateFiltered([]))
      setCommonFilter((prevCommonFilter) => ({
        ...prevCommonFilter,
        categoryNames: [],
      }));
      return;
    }
    console.log(2);
    setCommonFilter((prevCommonFilter) => ({
      ...prevCommonFilter,
      categoryNames: categoryNames,
    }));

    // dispatch(getFilteredQuizzesThunk(categoryNames))
  }, [dispatch, categoryNames]);

  const handleCategorySelection = (data, selectTitle) => {
    const isChecked = data.target.checked;
    const selectedCategoryName = data.target.value;

    if (isChecked) {
      setCategoryNames((prevCategoryNames) => [
        ...prevCategoryNames,
        selectedCategoryName,
      ]);      
      if (selectTitle === "For children") {
        setChildrenCategoryNames((prevChildrenCategoryNames) => [
          ...prevChildrenCategoryNames,
          selectedCategoryName,
        ]);
      } else {
        setAdultCategoryNames((prevAdultCategoryNames) => [
          ...prevAdultCategoryNames,
          selectedCategoryName,
        ]);
      }
    } else {
      const updatedCategoryName = categoryNames.filter(
        (name) => name !== selectedCategoryName
      );
      setCategoryNames(updatedCategoryName);

      if (selectTitle === "For children") {
        const updatedChildrenCategoryName = childrenCategoryNames.filter(
          (name) => name !== selectedCategoryName
        );
        setChildrenCategoryNames(updatedChildrenCategoryName);
      } else {
        const updatedAdultCategoryName = adultCategoryNames.filter(
          (name) => name !== selectedCategoryName
        );
        setAdultCategoryNames(updatedAdultCategoryName);
      }
    }
  };

  const handleStarSelection = (starsQty) => {
    if(categoryNames.length){
      const localStarsFiltered = filteredQuizes.filter((quiz)=>Math.round(quiz.rate) === starsQty);
      console.log('filteredQuizes: ', filteredQuizes);
      console.log('localStarsFiltered: ', localStarsFiltered);
      if(starsQty > 1){
        setDiscoverRender(localStarsFiltered)
      }else{
        setDiscoverRender(filteredQuizes) 
      }
      //dispatch(updateFiltered(localStarsFiltered))
      return
    }else{
      setCommonFilter((prevCommonFilter) => ({
        ...prevCommonFilter,
        ratingStars: starsQty,
      }));
    }
  };

  const selectedCategoryNames = {
    childrenCategoryNames,
    adultCategoryNames,
  };

  return (
    <PageWrapper>
      <SectionWrapper>
        <PageTopBar titlePage="Discover" />
        <QuizeFilterTools
          handleStarSelection={handleStarSelection}
          handleCategorySelection={handleCategorySelection}
          totalResults={discoverRender? discoverRender.length : filteredQuizes?.length}
          selectedCategoryNames={selectedCategoryNames}
        />
        <QuizesList quizzesArr={discoverRender? discoverRender : filteredQuizes} className={"bottomVariant"} />
        <BtnLoadMore />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default DiscoverPage;
