import * as React from 'react';
import useQueryString from 'use-query-string';

const DEFAULT_LANGUAGE = 'de';
const Context = React.createContext({
  current: DEFAULT_LANGUAGE,
  default: DEFAULT_LANGUAGE,
});

export const useLanguage = () => React.useContext(Context);

export const LanguageProvider: React.FC = ({ children }) => {
  const [query] = useQueryString(window.location);
  const lang = query.lang || DEFAULT_LANGUAGE;

  return (
    <Context.Provider value={{ current: lang, default: DEFAULT_LANGUAGE }}>
      {children}
    </Context.Provider>
  );
};
