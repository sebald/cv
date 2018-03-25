import { theme } from '..';
import { animation } from './animation';

test('animation', () => {
  expect(animation({ theme, animation: 'fadeInUp' }));
  expect(animation({ theme, animation: 'fadeInUp', duration: 100 }));
  expect(
    animation({ theme, animation: 'fadeInUp', duration: 200, easing: 'sharp' })
  );
  expect(animation({ theme, animation: 'fadeInUp', delay: 10 }));
  expect(animation({ theme, animation: 'fadeInUp', mode: 'forwards' }));
});
