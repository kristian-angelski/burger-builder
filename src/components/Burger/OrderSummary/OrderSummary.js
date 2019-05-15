import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
	const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
		return (
			// console.log(ingKey, props.ingredients[ingKey])

			<li key={ingKey}>
				<span style={{ textTransform: 'capitalize' }}>{ingKey}</span>:{' '}
				{props.ingredients[ingKey]}
			</li>
		);
	});

	return (
		<Auxiliary>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredientSummary}</ul>
			<p>Continue to Checkout?</p>
			<Button clicked={props.purchaseCanceled} btnType="Danger">
				CANCEL
			</Button>
			<Button clicked={props.purchaseContinued} btnType="Success">
				CONTINUE
			</Button>
		</Auxiliary>
	);
};

export default orderSummary;
