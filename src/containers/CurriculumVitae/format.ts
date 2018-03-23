export const formatDateString = (date: string) => {
  const d = new Date(date);
  return d.toLocaleDateString('de-DE', { year: 'numeric', month: 'short' });
};

export const formatPeriod = (from: string, to?: string | undefined) =>
  `${formatDateString(from)} - ${to ? formatDateString(to) : 'heute'}`;

export const formatActivityAtLocation = (
  activity: string,
  location?: string | undefined
) => `${activity}${location ? ` @ ${location}` : ''}`;
