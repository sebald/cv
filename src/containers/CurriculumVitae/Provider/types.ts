import * as React from 'react';
import { CurriculumVitae } from '..';

export type CVProviderProps = {
  cv: { [lang:string] : CurriculumVitae};
  children: React.ReactNode;
};
