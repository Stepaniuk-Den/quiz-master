import React from "react";
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

const SelectAttributeCard = () => {
  return (
    <SetAttributeDiv>
      <SelectAudienceDiv>
        <AttributeTitles>Audience</AttributeTitles>
        <InputsWrapper>
          <ChooseAudienceLabel htmlFor="children">
            <input type="radio" id="children" name="Audience" />
            For Children
            <span></span>
          </ChooseAudienceLabel>
          <ChooseAudienceLabel htmlFor="adults">
            <input type="radio" id="adults" name="Audience" />
            For Adults
            <span></span>
          </ChooseAudienceLabel>
        </InputsWrapper>
      </SelectAudienceDiv>
      <div>
        <AttributeTitles>Categories</AttributeTitles>
        <AttributeCategorySelect
          name="categories"
          id=""
        ></AttributeCategorySelect>
      </div>
      <div>
        <AttributeTitles>Background</AttributeTitles>
        <SelectColorDiv>
          <ColorLabel>
            <input type="radio" id="#43A8D3" name="Background" />
            <span className="blue"></span>
          </ColorLabel>
          <ColorLabel>
            <input type="radio" id="#6636C5" name="Background" />
            <span className="viola"></span>
          </ColorLabel>
          <ColorLabel>
            <input type="radio" id="#E65368" name="Background" />
            <span className="orange"></span>
          </ColorLabel>
        </SelectColorDiv>
      </div>
    </SetAttributeDiv>
  );
};

export default SelectAttributeCard;
