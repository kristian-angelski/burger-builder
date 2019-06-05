import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		},
		loading: false
	};

	orderHandler = event => {
		console.log(this.props);
		event.preventDefault();
		// console.log(this.props.ingredients);
		this.setState({ loading: true });
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'Kristian Angelski',
				address: {
					street: 'Teststreet 1',
					zipCode: '41414',
					country: 'Bulgaria'
				},
				email: 'test@test.com'
			},
			deliveryMethod: 'fastest'
		};
		axios
			.post('/orders.json', order)
			.then(response => {
				this.setState({ loading: false });
				this.props.history.push('/');
			})
			.catch(error => {
				this.setState({ loading: false });
			});
	};

	render() {
		let form = (
			<form>
				<Input
					inputType="input"
					type="text"
					name="name"
					placeholder="Your name"
				/>
				<Input
					inputType="input"
					type="email"
					name="email"
					placeholder="Your email"
				/>
				<Input
					inputType="input"
					type="text"
					name="street"
					placeholder="Street"
				/>
				<Input
					inputType="input"
					type="text"
					name="postal"
					placeholder="Postal code"
				/>
				<Button clicked={this.orderHandler} btnType="Success">
					ORDER
				</Button>
			</form>
		);

		if (this.state.loading) {
			form = <Spinner />;
		}
		return (
			<div className={classes.ContactData}>
				<h4>Enter your details</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;
