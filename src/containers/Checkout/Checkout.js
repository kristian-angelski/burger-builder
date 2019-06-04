import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
	state = {
		ingredients: null,
		price: 0
	};

	componentWillMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		let price = 0;
		for (let param of query.entries()) {
			// ['salad', '1']
			// adding + infront of param[1] to make it number
			if (param[0] === 'price') {
				price = param[1];
			} else {
				ingredients[param[0]] = +param[1];
			}
		}

		this.setState({ ingredients: ingredients, price: price });
	}

	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	};

	checkoutCancelledHandler = () => {
		this.props.history.goBack();
	};

	render() {
		return (
			<div>
				<CheckoutSummary
					checkoutContinued={this.checkoutContinuedHandler}
					checkoutCancelled={this.checkoutCancelledHandler}
					ingredients={this.state.ingredients}
					price={this.state.price}
				/>
				<Route
					path={this.props.match.path + '/contact-data'}
					render={props => (
						<ContactData
							ingredients={this.state.ingredients}
							price={this.state.price}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

export default Checkout;
