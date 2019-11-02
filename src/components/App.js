import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

const App = () => {
  const [language, setLanguage] = React.useState('eng');

  const onLangChange = language => setLanguage(language);

  return (
    <div className="ui container">
      <div>
        Select a language:
        <i className="flag us" onClick={() => onLangChange('eng')} ></i>
        <i className="flag se" onClick={() => onLangChange('swe')} ></i>
      </div>
      <ColorContext.Provider value="red">
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider>
      </ColorContext.Provider>
    </div>
  );
}

export default App;
