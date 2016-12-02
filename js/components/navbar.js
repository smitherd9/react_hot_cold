import React from 'react';
import What from './what';
import NewGame from './newgame';

export default class Navbar extends React.Component {
	render() {

		return (
			<nav> 
				<ul className="clearfix">
					<What />
					<NewGame />
				</ul>
			</nav>
		);
	}
}