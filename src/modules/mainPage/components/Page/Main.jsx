import React from "react";
import Hero from "../Hero/Hero.jsx";
import Advantages from "../Advantages/Advantages.jsx";
import Quizzes from "../Quizzes/Quizzes.jsx";
import NavBlock from "../NavBlock/NavBlock.jsx";
import Reviews from "../Reviews/Reviews.jsx";

function Main({data}) {
  const {user, reviews, randomAdultQuizzes, randomChildrenQuizzes} = data;

  return (
    <>
      <Hero />
      <Advantages />
      <Quizzes adultQuizzes={randomAdultQuizzes} childrenQuizzes={randomChildrenQuizzes}/>
      <NavBlock/>
      <Reviews reviews={reviews}/>
    </>
  );
}

export default Main;
