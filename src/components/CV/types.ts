import * as React from 'react';

export type PersonalInformation = {
  firstName: string;
  lastName: string;
  birthdate: string;
  contact: Record<'street' | 'zip' | 'city' | 'phone' | 'email', string>;
  spokenLanguages: string[];
  social: Record<'github' | 'stackoverflow' | 'twitter', string>;
};

export type WorkExperience = {
  period: {
    from: string;
    to?: string;
  };
  company?: {
    name: string;
    url?: string;
  };
  position: string;
  responsibilities: string[];
};

export type Education = Record<
  'degree' | 'date' | 'institution' | 'grade' | 'thesis',
  string
>;

export type CurriculumVitae = {
  personalInformation: PersonalInformation;
  position: string;
  workExperience: WorkExperience[];
  education: Education[];
  other_informatiion?: string[];
};

export type CVProviderProps = {
  cv: CurriculumVitae;
  children: React.ReactNode;
};
