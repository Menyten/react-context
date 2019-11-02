import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

const Button = () => {

  const renderSubmit = ({ language }) => language === 'eng' ? 'Submit' : 'Skicka';

  const renderButton = color => (
    <button className={`ui ${color} button`}>
      <LanguageContext.Consumer>
        {renderSubmit}
      </LanguageContext.Consumer>
    </button>
  );

  return (
    <ColorContext.Consumer>
      {renderButton}
    </ColorContext.Consumer>
  )
}

export default Button;
