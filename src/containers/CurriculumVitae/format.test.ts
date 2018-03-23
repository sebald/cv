import {
  formatActivityAtLocation,
  formatDateString,
  formatPeriod,
} from './format';

test('format date', () => {
  expect(formatDateString('2000-01')).toMatchSnapshot();
  expect(formatDateString('2017-12')).toMatchSnapshot();
  expect(formatDateString('2017-06-03')).toMatchSnapshot();
});

test('format period', () => {
  expect(formatPeriod('2000-01')).toMatchSnapshot();
  expect(formatPeriod('2000-01', '2000-05')).toMatchSnapshot();
});

test('format activity', () => {
  expect(formatActivityAtLocation('only a activity'));
  expect(formatActivityAtLocation('activitiy', 'location')).toMatchSnapshot();
});
