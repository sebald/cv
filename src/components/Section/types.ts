import * as React from 'react';

export type SectionContainerProps = {
  className?: string;
  title: React.ReactNode;
};

export type SectionItemProps = {
  title: React.ReactNode;
  caption?: React.ReactNode;
};
