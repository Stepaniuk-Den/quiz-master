import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BtnHeartS, FiHeartS } from "./BtnHeartStyled";

const BtnHeart = ({id, owner, updateFavoriteQuizes}) => {  
  const location = useLocation();
  const [isActive, setIsActive] = useState(false)

  const isLocationFavorite = location.pathname === "/favorite";
  const isFavorite = owner?.favorites
  const newClassName = isLocationFavorite || isFavorite || isActive ? "favorite" : "";

  const handlerOnHeartClick = (evt) => {
    updateFavoriteQuizes(evt.currentTarget.id)
    setIsActive(!isActive)
  }

  return (    
    <BtnHeartS
      type="button"
      id={id}    
      onClick={(evt)=>handlerOnHeartClick(evt)}
    >
      <FiHeartS className={newClassName} />
    </BtnHeartS>
  );
};

export default BtnHeart;
