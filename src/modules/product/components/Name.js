import React from 'react';
import Tools from 'utils';

const Name = ({ data, lang }) => (
  <h2>{data === null ? 'Product name' : Tools.l(data.name, lang)}</h2>
);

export default Name;
