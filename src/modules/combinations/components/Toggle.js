import React from 'react';
import { DropdownToggle } from 'reactstrap';
import Api from 'api';
import Tools from 'utils';

const Toggle = ({ data, options, lang }) => (
  <DropdownToggle caret>
    {data.associations.product_option_values.map((item, key) => (
      <span key={key}>
        {Tools.l(Api.helper.filterProductValue(options, item.id), lang)}&nbsp;&nbsp;
      </span>
    ))}
  </DropdownToggle>
);

export default Toggle;
