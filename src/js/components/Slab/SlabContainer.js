import React, { Component } from 'react'
import { connect } from 'react-redux';
import { checkSlab, switchPlayer } from 'Actions';

import CrossSlab from 'Components/Slab/CrossSlab/CrossSlab';
import NoughtSlab from 'Components/Slab/NoughtSlab/NoughtSlab';
import DefaultSlab from 'Components/Slab/DefaultSlab/DefaultSlab';



class Slab extends Component {

    constructor(props) {
        super(props);
    }

    
    onClickHandler = () => {

        if (this.props.isGameActive) {
            this.props.checkSlab(this.props.index, this.props.activePlayer);
            this.props.switchPlayer(this.props.activePlayer);
            setTimeout(() => {
                this.props.onEndTurn();
            }, 0);
        }
    }

    render() {
        
        const isEmptySlab = this.props.slabProps === null;
        const isXSlab = this.props.slabProps === 'X';
        const isOSlab = this.props.slabProps === 'O';

        return (
            <li>
                { isXSlab ?  <DefaultSlab> <CrossSlab /> </DefaultSlab> : '' }
                { isOSlab ?  <DefaultSlab> <NoughtSlab /> </DefaultSlab> : '' }
                { isEmptySlab ?  <DefaultSlab onCheck={this.onClickHandler}></DefaultSlab> : '' }
            </li>
        )
    }

}

function mapStateToProps(state) {
    return { activePlayer: state.player.active, isGameActive: state.game.isActive }
}

export default connect(mapStateToProps, { checkSlab, switchPlayer })(Slab);