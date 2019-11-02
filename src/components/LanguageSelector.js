import React from 'react';
import LanguageContext from '../context/LanguageContext';

const LanguageSelector = () => {
  const context = React.useContext(LanguageContext);
  
  return (
    <div>
      Select a language:
      <i className="flag us" onClick={() => context.onLangChange('eng')} ></i>
      <i className="flag se" onClick={() => context.onLangChange('swe')} ></i>
    </div>
  );
}

export default LanguageSelector;
