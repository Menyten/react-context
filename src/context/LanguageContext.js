import React from 'react';

const Context = React.createContext('eng');

export const LanguageStore = ({ children }) => {
  const [language, setLanguage] = React.useState('eng');

  const onLangChange = lang => setLanguage(lang);

  return (
    <Context.Provider value={{ language, onLangChange }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
