import { CurriculumVitae } from './containers/CurriculumVitae';

export const cv: CurriculumVitae = {
  personalInformation: {
    firstName: 'Sebastian',
    lastName: 'Sebald',
    contact: {
      street: 'Neumatten 4',
      zip: '79232',
      city: 'March',
      phone: '0761 / 12 345 678',
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
  position: 'Software Entwickler',
  workExperience: [
    {
      period: {
        from: '2015-09',
      },
      company: {
        name: 'PTW Freiburg GmbH',
        url: 'http://ptw.de',
      },
      position: 'Software Entwickler',
      responsibilities: [
        'Entwickeln einer GUI für eine neues Universal Dosimeter (React, TypeScript, Material-UI, Jest). Mitwirkung bei der Erstellung des Systemskonzepts mit der Hardware-Abteilung.',
        'Entwickeln einer Software zur Fernsteuerung eines Wasser Phantoms (AngularJS, TypeScript, Redux, RxJS, http://www.beamscan.de). Erstellung eines Servers (NodeJS) zur Virtualisierung von Hardware.',
        'Einführung eines agilen Entwicklungsprozesses (Jira, Bitbucket, Bamboo).',
        'Entwickeln einer Software für QA Datenverwaltung (AngularJS, Bootstrap, http://www.ptw.de/3468.html). Optimieren und Vereinheitlichen von Build-Prozessen (npm, Gulp). Erstellen von automatisierten End-2-End Tests (Karma, Protractor).',
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
        'Leitung Front-End-Entwicklung. Abstimmung mit Back-End-Entwicklung und Planung von neuen Funktionalitäten mit dem Projektmanagement und dem Universitätsklinikum Freiburg. Einarbeiten und Schulen neuer Mitarbeiter.',
        'Neuentwicklung einer webbasierten CTx-Planungs- und Verwaltungssoftware (AngularJS, Sass)',
        'Aufau eines agilen "DIN EN ISO 13485"-konformen Entwicklungsprozesses. Dokumentation von Anforderungen durch individuellen Static Site Generator (Jekyll). Zur Unterstützung agiler Entwicklung wurde ein eigenes Dashboard  entwickelt (github.com/mps-gmbh/ed, Angular und Github API).',
        'Erstellen eines Corporate Designs und einer Komponenten-Bibliothek (Living Styleguide mit Sass, Bourbon, BEM, AngularJS).',
        'Aufbau einer Testumgebung mit Karma und Protractor (Test-driven Development) sowie automatisierte Front-End-Builds mit Hilfe von Grunt, Bower und npm.',
      ],
    },
    {
      period: {
        from: '2011-07',
        to: '2015-08',
      },
      position: 'Freelancer',
      responsibilities: [
        'Erstellen von responsiven Webseiten mit Wordpress oder Typo3. Bei Wordpress Projekten wurde sowohl das Front- als auch das Back-End implementiert. TeamgrÃ¶ÃŸe 1-5.',
        'Als Consultant tätig bei der Entwicklung Angular-basierter Enterprise Software. Zu den Aufgaben gehÃ¶rten die Einführung in Angular und Aufstellen von Best Practices.',
      ],
    },
    /**
    {
      period: {
        from: '2009-10',
        to: '2012-07',
      },
      company: {
        name: 'Imtek CPI, Albert-Ludwigs-Universität Freiburg',
      },
      position: 'IT-Support',
      responsibilities: [
        'Verwaltung und Wartung von ca. 60 Arbeitsplatzrechnern (Windows NT/XP/7, Ubuntu) und zwei Servern (nginx).',
        'Aufbau eines Ticketing-Systems zur effizienten Bearbeitung technischer Probleme.',
        'Einführung einer zentralen Versionsverwaltung von Forschungsdokumenten (SVN).',
        'Entwickeln einer PHP-basierten SoftwarelÃ¶sung zur Bestellung von Labormaterialien (Boostrap, jQuery, CodeIgniter, MySQL, github.com/sebald/Ordr/).',
      ],
    },
    {
      period: {
        from: '2009-03',
        to: '2012-07',
      },
      company: {
        name: 'IIG, Abteilung Telematik, Albert-Ludwigs-Universität Freiburg',
      },
      position: 'Wissenschaftliche Hilfskraft',
      responsibilities: [
        'Mitarbeit am Projekt "Insel 2" (Schutz der Privatsphäre im Bereich von Pflegediensten, DFG gefÃ¶rdert). Entwicklung eines Modells zum Schutz sensibler Daten, wenn diese zentral gespeichert werden. Proof-of-Concept-Implementierung durch ein Firefox AddOn.',
        'Mitarbeit am Projekt "Premium Services" (Marktplatz für Web Services, BMBF-gefÃ¶rdert). Umsetzung eines Web Services (Java, SOAP) zur Berechnung des monetären Kundenwerts und Implementierung einer webbasierte Benutzeroberfläche dieses Services (PHP, Javascript).',
        'Entwicklung eines Petri-Netz-Editors und zugehÃ¶rigem Analyse-Tools (Eclipse RPC und GEF). Ãœbernahme der Projektleitung, nachdem der zuständige Doktorat das Institut verlassen hat.',
      ],
    },
     */
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
    'Organisator "devsmeetup". Monatliches Treen von Entwicklern aus der Region Freiburg (devsmeetup.de).',
    'Contributer Material-UI',
  ],
};
