import React from 'react';
import renderHTML from 'react-render-html';
import Tools from 'utils';

let placeholder = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

const Description = ({ data, type, lang }) => {
  return (
    <div>
      {data === null ? (
        <p>{placeholder}</p>
      ) : type === 'short' ? (
        renderHTML(Tools.l(data.description_short, lang))
      ) : (
        renderHTML(Tools.l(data.description, lang))
      )}
    </div>
  );
};

export default Description;
