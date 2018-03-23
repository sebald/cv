const label = 'font-weight: bold; color: darkblue;';
const reset = 'font-weight: normal; color: black;';

export const info = () => {
  console.groupCollapsed('%cAbout this Site', 'font-size: large;');
  console.log(
    '%cSource of this site: %chttps://github.com/sebald/cv',
    label,
    reset
  );
  console.log(
    '%cToggle baseline grid: %cCtrl/Cmd+b',
    label,
    `${reset}font-family: monospace;`
  );
  console.groupEnd();
};
