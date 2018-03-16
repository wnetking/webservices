import React from 'react';
import { DropdownMenu, DropdownItem } from 'reactstrap';
import Api from 'api';
import Tools from 'utils';

const Dropdown = ({ lang, product, options, all, onClick }) => (
  <DropdownMenu>
    {product.data.associations.combinations.map((item, key) => (
      <DropdownItem key={key} onClick={onClick.bind(null, item.id)}>
        {Api.helper
          .filterCombination(all, item.id)
          .map((item, key) => (
            <span key={key}>
              {Tools.l(Api.helper.filterProductValue(options, item.id), lang)}&nbsp;&nbsp;
            </span>
          ))}
      </DropdownItem>
    ))}
  </DropdownMenu>
);

export default Dropdown;
