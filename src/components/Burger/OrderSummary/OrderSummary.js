import React, { Component } from 'react';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	// This could be a functional component, doesn't have to be a class - it is a class so that lifecycle methods could be used
	ingredientSummary = Object.keys(this.props.ingredients).map(ingKey => {
		return (
			<li key={ingKey}>
				<span style={{ textTransform: 'capitalize' }}>{ingKey}</span>:{' '}
				{this.props.ingredients[ingKey]}
			</li>
		);
	});

	// using this for debugging - to check for bottle neck like unnecessary re-renders
	componentWillUpdate() {
		console.log('[OrderSummary] willUpdate');
	}

	render() {
		return (
			<Auxiliary>
				<h3>Your Order</h3>
				<p>A delicious burger with the following ingredients:</p>
				<ul>{this.ingredientSummary}</ul>
				<p>
					<strong>Total Price: {this.props.price.toFixed(2)}</strong>
				</p>
				<p>Continue to Checkout?</p>
				<Button clicked={this.props.purchaseCanceled} btnType="Danger">
					CANCEL
				</Button>
				<Button clicked={this.props.purchaseContinued} btnType="Success">
					CONTINUE
				</Button>
			</Auxiliary>
		);
	}
}

export default OrderSummary;
