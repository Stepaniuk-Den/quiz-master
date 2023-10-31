import React from "react";
import Hero from "../Hero/Hero.jsx";
import Advantages from "../Advantages/Advantages.jsx";
import Quizzes from "../Quizzes/Quizzes.jsx";
import NavBlock from "../NavBlock/NavBlock.jsx";
import Reviews from "../Reviews/Reviews.jsx";

function Main({data}) {
  const {user, reviews, randomAdultQuizzes, randomChildrenQuizzes, handleChooseTest, handleCreateTest } = data;

  return (
    <>
      <Hero handlerChoose={handleChooseTest} handlerCreate={handleCreateTest}/>
      <Advantages />
      <Quizzes adultQuizzes={randomAdultQuizzes} childrenQuizzes={randomChildrenQuizzes}/>
      <NavBlock handlerChoose={handleChooseTest} handlerCreate={handleCreateTest}/>
      <Reviews reviews={reviews}/>
    </>
  );
}

export default Main;
