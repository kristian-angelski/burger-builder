import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';

const layout = props => (
	<Auxiliary>
		<div>Placeholder for Toolbar, SideDrawer, Backdrop</div>
		<main className={classes.Content}>{props.children}</main>
	</Auxiliary>
);

export default layout;
