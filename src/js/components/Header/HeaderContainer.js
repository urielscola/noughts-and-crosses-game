import React, { Component } from 'react'
import { connect } from 'react-redux';

import Header from 'Components/Header/Header';



class HeaderContainer extends Component {

    render() {
        return (
            <Header message={this.props.message}/>
        )
    }

}

function mapStateToProps(state) {
    return { message: state.message }
}

export default connect(mapStateToProps)(HeaderContainer);