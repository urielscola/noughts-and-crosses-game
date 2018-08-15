import React, { Component } from 'react';
import Root from 'Components/Root';
import BoardContainer from 'Components/Board/BoardContainer';
import HeaderContainer from 'Components/Header/HeaderContainer';

import '../../css/main.scss';


export default class App extends Component {

	render() {
		return (
			<Root>
				<div>
					<HeaderContainer/>
					<BoardContainer/>	
				</div>
			</Root>
		);
	}
}