import { BtnHeartS, FiHeartS } from "./BtnHeartStyled";
import { useLocation } from "react-router-dom";

const BtnHeart = ({id, owner, updateFavoriteQuizes}) => {  
  const location = useLocation(); 

  const isLocationFavorite = location.pathname === "/favorite";
  const isFavorite = owner?.favorites
  const newClassName = isLocationFavorite || isFavorite ? "favorite" : "";  

  return (    
    <BtnHeartS
      type="button"
      id={id}    
      onClick={(evt)=>updateFavoriteQuizes(evt.currentTarget.id)}
    >
      <FiHeartS className={newClassName} />
    </BtnHeartS>
  );
};

export default BtnHeart;
