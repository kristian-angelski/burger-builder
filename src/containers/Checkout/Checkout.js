import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
	state = {
		ingredients: {
			meat: 1,
			bacon: 1,
			cheese: 1,
			salad: 1
		}
	};

	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		for (let param of query.entries()) {
			// ['salad', '1']
			// adding + infront of param[1] to make it number
			ingredients[param[0]] = +param[1];
		}

		this.setState({ ingredients: ingredients });
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
				/>
				<Route
					path={this.props.match.path + '/contact-data'}
					component={ContactData}
				/>
			</div>
		);
	}
}

export default Checkout;
