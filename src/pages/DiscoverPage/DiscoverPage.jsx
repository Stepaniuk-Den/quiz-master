import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import { PageWrapper, SectionWrapper } from "./DiscoverPageStyled";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import QuizeFilterTools from "../../modules/discoverPage/components/QuizFilterTools/QuizFilterTools";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredQuizzesThunk,
  //getQuizCategoriesThunk,
} from "../../redux/quiz/quizThunks";
import { selectDiscoverFilteredQuizes } from "../../redux/selectors";
//import { updateFiltered } from "../../redux/quiz/quizSlice";

const DiscoverPage = () => {
  console.log("render");
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getQuizCategoriesThunk());
  // }, [dispatch]);

  const filteredQuizes = useSelector(selectDiscoverFilteredQuizes);
  // console.log("filteredQuizes: ", filteredQuizes);
  //const [discoverRender, setDiscoverRender] = useState(null);
  const [categoryNames, setCategoryNames] = useState([]);
  const [childrenCategoryNames, setChildrenCategoryNames] = useState([]);
  const [adultCategoryNames, setAdultCategoryNames] = useState([]);
  const [commonFilter, setCommonFilter] = useState({
    ratingStars: null,
    categoryNames: [],
  });
  // console.log('commonFilter: ', commonFilter);
  

  useEffect(() => {
    if (
      !commonFilter.ratingStars &&
      commonFilter.ratingStars !== 0 &&
      !commonFilter.categoryNames.length
    )
      return;
    dispatch(getFilteredQuizzesThunk(commonFilter));
  }, [dispatch, commonFilter]);

  useEffect(() => {
    if (!categoryNames?.length) {
      //dispatch(updateFiltered([])); //перевірити на ненужність
      //setDiscoverRender(null);
      // setCommonFilter((prevCommonFilter) => ({
      //   ...prevCommonFilter,
      //   categoryNames: [],
      // }));
      return;
    }
    // console.log(2);
    setCommonFilter((prevCommonFilter) => ({
      ...prevCommonFilter,
      categoryNames: categoryNames,
    }));
  }, [dispatch, categoryNames]);

  const handleCategorySelection = (data, selectTitle) => {    
    const isChecked = data.target.checked;
    const selectedCategoryName = data.target.value;
    const selectedCategoryId = data.target.id;

    if (isChecked) {
      setCategoryNames((prevCategoryNames) => [
        ...prevCategoryNames,
        selectedCategoryId,
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
        (name) => name !== selectedCategoryId
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
    // console.log("starsQty: ", Number(starsQty));    
    setCommonFilter((prevCommonFilter) => ({
      ...prevCommonFilter,
      ratingStars: Number(starsQty),
    }));
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
          // totalResults={
          //   discoverRender ? discoverRender.length : filteredQuizes?.length
          // }
          totalResults={filteredQuizes?.length}
          selectedCategoryNames={selectedCategoryNames}
          commonFilter={commonFilter}
        />
        <QuizesList
          // quizzesArr={discoverRender ? discoverRender : filteredQuizes}
          quizzesArr={filteredQuizes}
          className={"bottomVariant"}
        />
        <BtnLoadMore />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default DiscoverPage;
