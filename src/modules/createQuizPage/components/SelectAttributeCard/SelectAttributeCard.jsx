import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  AttributeCategorySelect,
  AttributeTitles,
  ChooseAudienceLabel,
  ColorLabel,
  InputsWrapper,
  SelectAudienceDiv,
  SelectColorDiv,
  SetAttributeDiv,
} from "./SelectAttributeCard.styled";

const SelectAttributeCard = (props) => {
  const {
    audience,
    changeAttribute,
    changeCategory,
    color,
    categories,
    categoryName,
  } = props;

  const arrOptions =
    audience === "adults" ? categories?.adults : categories?.children;

  return (
    <SetAttributeDiv>
      <SelectAudienceDiv>
        <AttributeTitles>Audience</AttributeTitles>
        <InputsWrapper>
          <ChooseAudienceLabel htmlFor="children">
            <input
              type="radio"
              id="children"
              name="Audience"
              checked={audience === "children"}
              onChange={changeAttribute}
            />
            For Children
            <span></span>
          </ChooseAudienceLabel>
          <ChooseAudienceLabel htmlFor="adults">
            <input
              type="radio"
              id="adults"
              name="Audience"
              checked={audience === "adults"}
              onChange={changeAttribute}
            />
            For Adults
            <span></span>
          </ChooseAudienceLabel>
        </InputsWrapper>
      </SelectAudienceDiv>
      <div>
        <AttributeTitles>Categories</AttributeTitles>
        <AttributeCategorySelect
          name="categories"
          id="categories"
          value={categoryName}
          onChange={changeCategory}
          //defaultValue="defaultOption"
        >
          <option value="defaultOption" hidden>
            {`For ${audience}`}
          </option>
          {arrOptions?.map((item) => (
            <option key={uuidv4()} value={item._id}>
              {item.categoryName}
            </option>
          ))}
        </AttributeCategorySelect>
      </div>
      <div>
        <AttributeTitles>Background</AttributeTitles>
        <SelectColorDiv>
          <ColorLabel>
            <input
              type="radio"
              id="#43A8D3"
              name="Background"
              checked={color === "#43A8D3"}
              onChange={changeAttribute}
            />
            <span className="blue"></span>
          </ColorLabel>
          <ColorLabel>
            <input
              type="radio"
              id="#6636C5"
              name="Background"
              checked={color === "#6636C5"}
              onChange={changeAttribute}
            />
            <span className="viola"></span>
          </ColorLabel>
          <ColorLabel>
            <input
              type="radio"
              id="#E65368"
              name="Background"
              checked={color === "#E65368"}
              onChange={changeAttribute}
            />
            <span className="orange"></span>
          </ColorLabel>
        </SelectColorDiv>
      </div>
    </SetAttributeDiv>
  );
};

export default SelectAttributeCard;
