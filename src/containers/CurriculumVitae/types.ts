export type PersonalInformation = {
  firstName: string;
  lastName: string;
  birthdate: string;
  contact: Record<'street' | 'zip' | 'city' | 'phone' | 'email', string>;
  spokenLanguages: string[];
  social: Record<'github' | 'stackoverflow' | 'twitter', string>;
};

export type WorkExperiences = {
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

export type Educations = Record<
  'degree' | 'date' | 'institution' | 'grade' | 'thesis',
  string
>;

export type CurriculumVitae = {
  personalInformation: PersonalInformation;
  position: string;
  workExperience: WorkExperiences[];
  education: Educations[];
  additional_information?: string[];
};
