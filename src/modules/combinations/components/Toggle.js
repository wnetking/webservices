import React from 'react';
import { DropdownToggle } from 'reactstrap';
import Api from 'api'

const Toggle = ({ data, options }) => {
  return (
    <DropdownToggle caret>
      {data.associations.product_option_values.map((item, key) => (
        <span key={key}>
          {Api.helper.filterProductValue(options, item.id)}&nbsp;&nbsp;
        </span>
      ))}
    </DropdownToggle>
  )
}

export default Toggle