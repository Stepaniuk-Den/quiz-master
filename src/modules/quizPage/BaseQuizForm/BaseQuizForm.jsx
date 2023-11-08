import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ButtonStart,
  Category,
  InputName,
  PageWrapper,
  QuizeBox,
  Title,
} from "./BaseQuizFormStyled";
import { useSelector } from "react-redux";
import { selectIsAuth, selectUser } from "../../../redux/user/userSelectors";

const BaseQuizForm = () => {
  const [inputValue, setInputValue] = useState("");
  const hasToken = useSelector(selectIsAuth);
  const name = useSelector(selectUser);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const quizId = searchParams.get("quizId");
  const category = searchParams.get("category");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (hasToken && name.name) {
      setInputValue(name.name);
    }
  }, [hasToken, name.name]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const UserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const isButtonDisabled =
    inputValue.length < 3 || (!hasToken && userName.length < 3);

  return (
    <PageWrapper>
      <QuizeBox>
        <Title>Log in to take the quiz</Title>
        <Category>{category}</Category>
        {hasToken && (
          <InputName
            type="text"
            placeholder="Name"
            onChange={handleInputChange}
            value={inputValue}
            readOnly={hasToken && name.name}
          />
        )}
        {!hasToken && (
          <InputName
            type="text"
            placeholder="Name"
            value={userName}
            onChange={UserNameChange}
          />
        )}
        <Link to={`/quiz/${quizId}?userName=${userName}`}>
          <ButtonStart disabled={isButtonDisabled}>Start</ButtonStart>
        </Link>
      </QuizeBox>
    </PageWrapper>
  );
};
// disabled = { isButtonDisabled };
export default BaseQuizForm;
