import React from 'react';
import { DropdownMenu, DropdownItem } from 'reactstrap';
import Api from 'api'

const Dropdown = ({ product, options, all, onClick }) => {
  return (
    <DropdownMenu>
      {product.data.associations.combinations.map((item, key) => (
        <DropdownItem key={key} onClick={onClick.bind(null, item.id)}>
          {Api.helper.filterCombination(all, item.id).map((item, key) => (
            <span key={key}>
              {Api.helper.filterProductValue(options, item.id)}&nbsp;&nbsp;
           </span>
          ))}
        </DropdownItem>
      ))}
    </DropdownMenu>
  )

}
export default Dropdown;