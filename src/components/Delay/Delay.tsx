import * as React from 'react';

import { DelayProps, DelayState } from './types';

export class Delay extends React.Component<DelayProps, DelayState> {
  state: DelayState = {
    appear: false,
  };

  timer: number | null = null;

  clearTimer() {
    if (this.timer !== null) {
      clearTimeout(this.timer);
    }
  }

  update() {
    const { timeout } = this.props;
    this.clearTimer();

    /**
     * Use `window` object so TypeScript can infer the correct type.
     * If omitted it would use node's `setTimeout` signature.
     */
    this.timer = window.setTimeout(() => {
      this.setState({
        appear: true,
      });
    }, timeout);
  }

  componentDidMount() {
    this.update();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  render() {
    return this.state.appear ? this.props.render() : null;
  }
}
