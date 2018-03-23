export const mergeClassNames = (...names: (string | undefined)[]) => ({
  className: names
    .filter(x => typeof x === 'string')
    .join(' ')
    .trim(),
});
