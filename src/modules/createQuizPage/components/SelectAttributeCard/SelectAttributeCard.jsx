import React from 'react'

const SelectAttributeCard = () => {
  return (
    <div>
          <div>
          <p>Audience</p>
          <div>
          <input type="radio" id='children' name='Audience'/>
          <label htmlFor="children" >For children</label>
          </div>
          <div>
          <input type="radio" id='adults' name='Audience'/>
          <label htmlFor="adults">For adults</label>
          </div>
          </div>
          <div>
          <p>Categories</p>
          <select name="categories" id=""></select>
          </div>
          <div>
          <p>Background</p>
          <div><input type="radio" id='#43A8D3' name='Background'/></div>
          <div><input type="radio" id='#6636C5' name='Background'/></div>
          <div><input type="radio" id='#E65368' name='Background'/></div>
          </div>
        </div>
  )      
}

export default SelectAttributeCard