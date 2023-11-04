import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { BtnHeartS, FiHeartS } from "./BtnHeartStyled";
import { updateFavoriteQuizThunk } from "../../../../redux/quiz/quizThunks";

const BtnHeart = ({ id, owner, updateFavoriteQuizes }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isActive, setIsActive] = useState(true);

  const isLocationFavorite = location.pathname === "/favorite";
  const isFavorite = owner?.favorites;
  const newClassName =
    (isFavorite && isActive) || (!isFavorite && !isActive) || isLocationFavorite
      ? "favorite"
      : "";

  const handlerOnHeartClick = (evt) => {
    const id = evt.currentTarget.id;
    const quizId = {
      favorites: id,
    };
    dispatch(updateFavoriteQuizThunk(quizId));
    setIsActive(!isActive);
  };

  return (
    <BtnHeartS
      type="button"
      id={id}
      onClick={(evt) =>
        isLocationFavorite
          ? updateFavoriteQuizes(evt)
          : handlerOnHeartClick(evt)
      }
    >
      <FiHeartS className={newClassName} />
    </BtnHeartS>
  );
};

export default BtnHeart;
