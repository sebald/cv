const LANG_MAP = {
  de: 'de-DE',
  en: 'en-US'
};

const TODAY_MAP = {
  de: 'heute',
  en: 'today'
};

export const formatDateString = (date: string, language = 'de') => {
  const d = new Date(date);
  return d.toLocaleDateString(LANG_MAP[language], { year: 'numeric', month: 'short' });
};

export const formatPeriod = (from: string, to?: string | undefined, language = 'de') =>
  `${formatDateString(from, language)} - ${to ? formatDateString(to, language) : TODAY_MAP[language]}`;

export const formatActivityAtLocation = (
  activity: string,
  location?: string | undefined
) => `${activity}${location ? ` @ ${location}` : ''}`;
