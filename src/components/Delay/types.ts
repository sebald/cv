import * as React from 'react';

export interface DelayState {
  appear: boolean;
}

export interface DelayProps {
  timeout: number;
  render: (() => React.ReactNode);
}
