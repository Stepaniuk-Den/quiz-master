import React from "react";
import Hero from "../Hero/Hero.jsx";
import Advantages from "../Advantages/Advantages.jsx";
import Quizzes from "../Quizzes/Quizzes.jsx";
import NavBlock from "../NavBlock/NavBlock.jsx";
import Reviews from "../Reviews/Reviews.jsx";

function Main() {
  return (
    <>
      <Hero />
      <Advantages />
      <Quizzes/>
      <NavBlock/>
      <Reviews/>
    </>
  );
}

export default Main;
