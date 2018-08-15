import React, { Component } from 'react'
import SlabContainer from 'Components/Slab/SlabContainer';
import Button from 'Components/Button/Button';

import './board.scss';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 500);
  }

  render() {
    return (
      <div className="board-wrap">
        <ul className={`board ${(this.state.loaded ? 'loaded' : '')}`}>
          {this.props.board.map((slab, index) => {
            return <SlabContainer key={index} slabProps={slab} index={index} onEndTurn={this.props.onEndTurn}/>
          })}
          <span className="board-grid first" />
          <span className="board-grid second" />
          <span className="board-grid third" />
          <span className="board-grid fourth" />
        </ul>
        <Button action={this.props.onReset} text={"Reset"} />
      </div>
    );
  }
}

export default Board;
