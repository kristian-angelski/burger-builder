import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
	state = {
		orders: [],
		loading: true
	};

	componentDidMount() {
		axios
			.get('/orders.json')
			.then(res => {
				let fetchedOrders = [];
				for (let key in res.data) {
					fetchedOrders.push({
						...res.data[key],
						id: key
					});
				}
				this.setState({ loading: false, orders: fetchedOrders });
				console.log(fetchedOrders);
			})
			.catch(err => {
				this.setState({ loading: false });
			});

		// console.log(this.state.orders);
	}

	render() {
		return (
			<div>
				<Order />
				<Order />
			</div>
		);
	}
}

export default withErrorHandler(Orders, axios);
