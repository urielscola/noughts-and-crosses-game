import React, { Component } from 'react';
import './cross-slab.scss';

class CrossSlab extends Component {

  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 200);
  }

  render() {
    return (
      <div className={`cross-slab ${(this.state.loaded ? 'loaded' : '')}`}>
        <span />
        <span />
      </div>
    );
  }
}

export default CrossSlab;
