export const formatPeriod = (from: string, to: string | undefined) =>
  `${from} - ${to || 'today'}`;

export const formatActivityAtLocation = (
  activity: string,
  location: string | undefined
) => `${activity}${location ? ` @ ${location}` : ''}`;
