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
    spokenLanguages: ['Deutsch', 'Englisch'],
    social: {
      github: 'sebald',
      stackoverflow: '298969',
      twitter: 'sebastiansebald',
    },
  },
  position: 'Software Architekt',
  workExperience: [
    {
      period: {
        from: '2018-06'
      },
      company: {
        name: 'Reservix GmbH',
        url: 'http://reservix.net',
      },
      position: 'Software Architekt',
      responsibilities: [
        'Anforderungsanalyse und Erstellung eines Systemkonzepts für ein zentrales Redaktionssystem sowie technische Leitung bei der Implementierung des Systems (TypeScript, NodeJS, Apollo, GraphQL, ElasticSearch, Jest).',
        'Teamleiter "Portal": Verantwortlich für die Entwicklung der Reservix Shops Systems sowie dem dazugehörigen Team (Bspw. reservix.de, tickets.dfb.de, hr-ticketcenter.de).',
        'Planung einer Restrukturierung der "Shop" Domäne und Abteilung, sowohl technisch als auch organisatorisch. Ziel ist die Ablösung und Verjüngung des Software Monolithen und das Bilden von selbst-organisierten Produkt-Teams. In Zusammenarbeit mit PM und e-Commerce.'
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
      position: 'Software Entwickler',
      responsibilities: [
        'Technische Projektleitung für die Entwicklung web-basierter Software zur Steuerung medizinischer Geräte sowie Erstellung von Systemkonzepten in Zusammenarbeit mit der Hardware-Entwicklung (TypeScript, React, Redux, RxJS, Jest, NodeJS, Express, Material-UI).',
        'Einführung eines agilen Entwicklungsprozesses (Jira, Bitbucket, Bamboo) und Optimierung von Build-Prozessen durch Vereinheitlichung der Build-Pipelines und Erstellung von automatisierten E2E-Tests (Karma, Protractor).',
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
      position: 'Gründer & Software Entwickler',
      responsibilities: [
        'Leitung der FrontEnd-Entwicklung für die Neuentwicklung einer web-basierten CTx-Planungs- und Verwaltungssoftware in Zusammenarbeit mit dem Universitätsklinikum Freiburg (UKF). Einarbeitung und Schulen neuer Mitarbeiter sowie Planung neuer Funktionalitäten in Absprache mit dem Projektmanagement und der UKF.',
        'Umsetzen eines agilen, "DIN EN ISO 13485"-konformen Entwicklungsprozesses, Erstellen eines Corporate Designs mit Hilfe einer Komponenten-Bibliothek (Living Styleguide mit Sass, Bourbon, BEM, AngularJS) und Aufbau einer Testumgebung nach TDD-Prinzipien (Karma, Protractor, Buildbot, Github).',
      ],
    },
    {
      period: {
        from: '2011-07',
        to: '2015-08',
      },
      position: 'Freelancer',
      responsibilities: [
        'Erstellen von responsiven Webseiten mit Wordpress und Typo3. Bei Wordpress Projekten wurden FrontEnd und BackEnd implementiert.',
        'Berater für die Entwicklung AngularJS-basierter Software. Zu den Aufgaben gehörte das Einlernen in AngularJS und das Aufstellen von Best Practices.',
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
        'Verwaltung und Wartung von ca. 60 Arbeitsplatzrechnern (Windows NT/XP/7, Ubuntu) und zwei Servern (nginx). Einführung eines Ticketing-Systems zur effizienten Bearbeitung von technischen Problemen.',
        'Entwickeln einer PHP-basierten Software zur Bestellung von Labormaterialien (Boostrap, jQuery, CodeIgniter, MySQL).',
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
        'Mitarbeit in DFG- und BMBF-Projekten. Innerhalb der Projekte wurde unter anderem ein SOAP-WebService zur Berechnung des monetären Kundenwerts und ein Petri-Netz-Editor (Eclipse RPC/GEF) entwickelt.',
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
    '👨‍👩‍👦‍👦  🐕  🏈  🏐',
    'Organisator des Devsmeetup',
    'Alumni Material-UI',
  ],
};
