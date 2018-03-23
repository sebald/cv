import * as React from 'react';
import { createPortal } from 'react-dom';

import { Baseline } from './Baseline';
import { BaselineGridState } from './types';

export class BaselineGrid extends React.Component<{}, BaselineGridState> {
  el: HTMLElement;
  state: BaselineGridState = {
    show: false,
  };

  constructor(props: object) {
    super(props);
    this.el = document.createElement('div');
  }

  handleKeyPress = (ev: KeyboardEvent) => {
    const modifier = ev.metaKey || ev.ctrlKey;
    if (modifier && ev.key === 'b') {
      this.setState(prevState => ({ show: !prevState.show }));
    }
  };

  componentDidMount() {
    document.body.appendChild(this.el);
    window.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
    window.removeEventListener('keypress', this.handleKeyPress);
  }

  render() {
    return this.state.show ? createPortal(<Baseline />, this.el) : null;
  }
}
