import * as React from 'react';

import { CvConsumer } from '..';
import { Github, StackOverflow, Twitter } from '../../../components/Icon';
import { Infobox } from '../../../components/Infobox';
import { IconLink } from '../../../components/Link';
import { padding, styled } from '../../../style';

const SocialInfobox = styled(Infobox)`
  @media print {
    display: none;
  }
`;

const SocialIconList = styled.div`
  display: flex;
  justify-content: space-evenly;

  ${padding(1, 0)};
`;
SocialIconList.displayName = 'SocialIconList';

export const Social: React.SFC = () => (
  <CvConsumer>
    {({ personalInformation: { social } }) => (
      <SocialInfobox title="Social">
        <SocialIconList>
          <IconLink href={`https://github.com/${social.github}`}>
            <Github />
          </IconLink>
          <IconLink href={`https://twitter.com/${social.twitter}`}>
            <Twitter />
          </IconLink>
          <IconLink
            href={`https://stackoverflow.com/users/${social.stackoverflow}`}
          >
            <StackOverflow />
          </IconLink>
        </SocialIconList>
      </SocialInfobox>
    )}
  </CvConsumer>
);
