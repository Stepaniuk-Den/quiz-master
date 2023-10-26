import Select from "../../../../shared/Select/Select"
import { FormFiltersWrapper, SelectWrapper } from "./FormFiltersFavoriteStyled"


const FormFiltersFavorite = () => {
  return (
    <FormFiltersWrapper>      
      <form>
        <SelectWrapper>
          <Select className="search" selectTitle='Search' options='options1'/>          
        </SelectWrapper>        
      </form>
    </FormFiltersWrapper>
  )
}

export default FormFiltersFavorite