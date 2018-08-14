import React, { Component } from 'react';
import { Form, Button } from'semantic-ui-react';

export default class AddTrack extends Component {
	state = {
		title: '',
		movement: '',
		composer: '',
		performer: '',
		year: ''
	};

	onChange = e => {
		// [e.target.name] comes from name attribute in <input>
		this.setState({ [e.target.name]: e.target.value });
	};

	submit = e => {
		e.preventDefault();
		this.props.upload(this.state);
		this.setState({ title: '', movement: '', composer: '', performer: '', year: '' });
	};

	render() {
		return (
			<div>
				<input type='file' />
				<Form>
					<Form.Field>
						<label>Title</label>
						<input
							placeholder='Title'
							onChange={this.onChange}
							name='title'
							value={this.state.title}
						/>
					</Form.Field>
					<Form.Field>
						<label>Movement</label>
						<input
							placeholder='Movement'
							onChange={this.onChange}
							name='movement'
							value={this.state.movement}
						/>
					</Form.Field>
					<Form.Field>
						<label>Composer</label>
						<input
							placeholder='Composer'
							onChange={this.onChange}
							name='composer'
							value={this.state.composer}
						/>
					</Form.Field>
					<Form.Field>
						<label>Performer</label>
						<input
							placeholder='Performer'
							onChange={this.onChange}
							name='performer'
							value={this.state.performer}
						/>
					</Form.Field>
					<Form.Field>
						<label>Recording Year</label>
						<input
							placeholder='Recording Year'
							onChange={this.onChange}
							name='year'
							value={this.state.year}
						/>
					</Form.Field>
					<Button type='submit' onClick={this.submit}>Upload</Button>
				</Form>
			</div>
		)
	}
};
