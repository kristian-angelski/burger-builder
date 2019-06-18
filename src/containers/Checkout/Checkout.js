import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	};

	checkoutCancelledHandler = () => {
		this.props.history.goBack();
	};

	render() {
		let summary = <Redirect to="/" />;
		if (this.props.ings) {
			summary = (
				<div>
					<CheckoutSummary
						checkoutContinued={this.checkoutContinuedHandler}
						checkoutCancelled={this.checkoutCancelledHandler}
						ingredients={this.props.ings}
					/>
					<Route
						path={this.props.match.path + '/contact-data'}
						component={ContactData}
					/>
				</div>
			);
		}
		return summary;
	}
}

const mapStateToProps = state => {
	return {
		ings: state.burgerBuilder.ingredients,
		price: state.burgerBuilder.totalPrice
	};
};

export default connect(mapStateToProps)(Checkout);
