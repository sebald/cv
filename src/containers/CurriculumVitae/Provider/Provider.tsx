import * as React from 'react';

import { useLanguage } from '../../../components/Language';
import { CurriculumVitae } from '..';
import { CVProviderProps } from './types';

const CurriculumVitaeContext = React.createContext<CurriculumVitae>({} as any);

// Provider
// ---------------
export const CvProvider: React.FC<CVProviderProps> = ({ cv, children }) => {
  const language = useLanguage();
  return (
    <CurriculumVitaeContext.Provider
      value={cv[language.current] || cv[language.default]}
    >
      {children}
    </CurriculumVitaeContext.Provider>
  );
};

// Consumer
// ---------------
export const CvConsumer = CurriculumVitaeContext.Consumer;
