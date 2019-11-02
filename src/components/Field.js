import React from 'react';
import LanguageContext from '../context/LanguageContext';


const Field = () => {
  const context = React.useContext(LanguageContext);
  const text = context.language === 'eng' ? 'Name' : 'Namn';
  return (
    <div className="ui field">
      <label>{text}</label>
      <input />
    </div>
  );
}

export default Field;
