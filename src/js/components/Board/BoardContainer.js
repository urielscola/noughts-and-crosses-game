import React, { Component } from 'react';
import { connect } from 'react-redux';
import { endTurn, resetGame } from 'Actions';

import Board from 'Components/Board/Board';

class BoardContainer extends Component {
    
    render () {
        return (
            <Board board={this.props.board} onEndTurn={() => this.props.endTurn(this.props.board)} onReset={this.props.resetGame}/>
        )
    }
}

function mapStateToProps(state) {
    return { board: state.game.board }
}

export default connect(mapStateToProps, { endTurn, resetGame })(BoardContainer);