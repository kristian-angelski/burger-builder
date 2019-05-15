import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = props => {
	// conditionaly attach different css classes
	return (
		<div className={classes.SideDrawer}>
			<Logo />
			<nav>
				<NavigationItems />
			</nav>
		</div>
	);
};

export default sideDrawer;
