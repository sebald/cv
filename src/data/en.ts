import { CurriculumVitae } from '../containers/CurriculumVitae';

export const cv: CurriculumVitae = {
  personalInformation: {
    firstName: 'Sebastian',
    lastName: 'Sebald',
    contact: {
      street: 'Neumatten 4',
      zip: '79232',
      city: 'March',
      email: 'sebastian.sebald@gmail.com',
    },
    birthdate: '1984-07-24',
    spokenLanguages: ['German', 'English'],
    social: {
      github: 'sebald',
      stackoverflow: '298969',
      twitter: 'sebastiansebald',
    },
  },
  position: 'Software Architect',
  workExperience: [
    {
      period: {
        from: '2018-06'
      },
      company: {
        name: 'Reservix GmbH',
        url: 'http://reservix.net',
      },
      position: 'Software Architect',
      responsibilities: [
        'Conduct a requirement analysis and develop an architectural concept for a centralized editorial system. Technical lead for the implementation of the system (TypeScript, NodeJS, Apollo, GraphQL, ElasticSearch, Jest).',
        '“Portal” team lead: responsible for the development of Reserivx’ Shop system as well as the team behind it. Examples for shops can be found here: reservix.de, tickets.dfb.de, hr-ticketcenter.de',
        'Planning and restructure of the “Shop” domain and department. This includes the technical as well as organizational aspects. The goal is to replace and rejuvenate the current software monolith and form self-organized and streamlined product teams. In partnership with project management and the e-commerce department.'
      ],
    },
    {
      period: {
        from: '2015-09',
        to: '2018-05',
      },
      company: {
        name: 'PTW Freiburg GmbH',
        url: 'http://ptw.de',
      },
      position: 'Software Engineer',
      responsibilities: [
        'Technical lead for the development of a web-based remote control for medical devices. Also, creating an architectural concept in cooperation with the hardware departement (TypeScript, React, Redux, RxJS, Jest, NodeJS, Express, Material-UI).',
        'Responsible for the introduction of agile development practices and related software (Jira, Bitbucket, Bamboo)',
        'Optimizing and standardise build processes. Add automatic E2E-Tests to pipelines (Karma, Protractor).'
      ],
    },
    {
      period: {
        from: '2012-08',
        to: '2015-08',
      },
      company: {
        name: 'MPS GmbH',
        url: 'http://chemocompile.de',
      },
      position: 'Founder & Software Engineer',
      responsibilities: [
        'Front-end lead: Responsible for the development of a web-based CTx planing and management software in cooperation with the University Medical Center Freiburg (UKF). Onboarding and training new employees as well as planing of new features in cooperation with project management and the UKF.',
        'Implementing an agile and "DIN EN ISO 13485"-compliant development process. Creating and implementing a coporate design based on a custom component library (living styleguide with Sass, Bourbon, BEM, AngularJS) and setup of a testing enviroment based on TDD principles (Karma, Protractor, Buildbot, Github).',
      ],
    },
    {
      period: {
        from: '2011-07',
        to: '2015-08',
      },
      position: 'Freelancer',
      responsibilities: [
        'Developing responsive website with Wordpress and Typo3.',
        'Consultant for AngularJS-based software: Training, onboarding and establishing best practices.',
      ],
    },
    {
      period: {
        from: '2009-10',
        to: '2012-07',
      },
      company: {
        name: 'CPI, Imtek',
      },
      position: 'IT-Support',
      responsibilities: [
        'Manage and maintain circa 60 workstation computer (Windows NT/XP/7, Ubuntu) and two server (nginx). Introducing of a ticketing system for a more efficient handling of technical difficulties.',
        'Developing a PHP based software for the ordering of laboraoiry material (Boostrap, jQuery, CodeIgniter, MySQL).',
      ],
    },
    {
      period: {
        from: '2009-03',
        to: '2012-07',
      },
      company: {
        name: 'IIG, Abt. Telematik',
      },
      position: 'Wissenschaftliche Hilfskraft',
      responsibilities: [
        'Working on DFG- und BMBF projekct. Developing a SOAP web service for the calcualtion of the monetary customer value and a Petri Net editor (Eclipse RPC/GEF).',
      ],
    },
  ],
  education: [
    {
      degree: 'M.Sc. Informatik',
      date: '2012-07',
      institution: 'Albert-Ludwigs-Universität Freiburg',
      grade: '1,7',
      thesis: 'Sicherheitsorientierte Simulation von Geschäftsprozessen',
    },
    {
      degree: 'B.Sc. Informatik',
      date: '2010-02',
      institution: 'Albert-Ludwigs-Universität Freiburg',
      grade: '2,3',
      thesis:
        'Schutz vertraulicher Daten vor dem Zugriff durch JavaScript des Dienstanbieters',
    },
  ],
  additional_information: [
    'Organizing Devsmeetup (local meetup group)',
    'Alumni Material-UI',
  ],
};
