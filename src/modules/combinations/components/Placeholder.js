import React from 'react';
import { ButtonDropdown, DropdownToggle } from 'reactstrap';

const Placeholder = ({ dropdownOpen, toggle }) => {
  return (<div>
    <p>Quantity: loading ...</p>
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="mb-4">
      <DropdownToggle caret>Combination loding ...</DropdownToggle>
    </ButtonDropdown>
  </div>
  )
}

export default Placeholder;