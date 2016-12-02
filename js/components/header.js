import React from 'react';
import Navbar from './navbar';


export default class Header extends React.Component {
	render(){
		return (
			<header>
			<Navbar />
			<h1>HOT or COLD</h1>
			</header>

			);
	}
}