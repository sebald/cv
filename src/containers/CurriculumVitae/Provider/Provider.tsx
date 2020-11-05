import * as React from 'react';

import { CurriculumVitae } from '..';
import { CVProviderProps } from './types';

const CurriculumVitaeContext = React.createContext<CurriculumVitae>({} as any);

// Provider
// ---------------
export const CvProvider: React.SFC<CVProviderProps> = ({ cv, children }) => (
  <CurriculumVitaeContext.Provider value={cv}>
    {children}
  </CurriculumVitaeContext.Provider>
);

// Consumer
// ---------------
export const CvConsumer = CurriculumVitaeContext.Consumer;
