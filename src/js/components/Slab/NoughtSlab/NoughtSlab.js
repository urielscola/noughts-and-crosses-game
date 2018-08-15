import React, { Component } from 'react';
import './nought-slab.scss';

class NoughtSlab extends Component {

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
      <div className={`nought-slab ${(this.state.loaded ? 'loaded' : '')}`}>
        <span />
      </div>
    );
  }
}

export default NoughtSlab;
