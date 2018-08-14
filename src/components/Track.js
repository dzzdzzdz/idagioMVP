import React, { Component } from 'react';
import { Table, Button, Input, Icon } from 'semantic-ui-react';

export default class Track extends Component {
	state = {
		isEditing: false
	};

	handleEdit = () => {
		this.setState({ isEditing: true });
	};

	handleEditDone = e => {
		if (e.keyCode === 13) { // Submit edit input
			this.setState({ isEditing: false, [e.target.name]: e.target.value });
			this.props.handleEdit(this.state, this.props);
		}
	};

	handleEditChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleDelete = target => {
		this.props.handleDelete(target);
	};

	render() {
		const { title, movement, composer, performer, year } = this.props;
		const { isEditing } = this.state;
		let viewStyle = {};
		let editStyle = {};
		isEditing ? viewStyle.display = 'none' : editStyle.display = 'none';

		return (
			<Table.Row key={title}>
				<Table.Cell>
					<div style={viewStyle}>{title}</div>
					<Input
						type='text'
						value={this.state.title}
						style={editStyle}
						placeholder={title}
						name='title'
						onKeyDown={this.handleEditDone}
						onChange={this.handleEditChange}
					/>
				</Table.Cell>
				<Table.Cell>
					<div style={viewStyle}>{movement}</div>
					<Input
						type='text'
						value={this.state.movement}
						style={editStyle}
						placeholder={movement}
						name='movement'
						onKeyDown={this.handleEditDone}
						onChange={this.handleEditChange}
					/>
				</Table.Cell>
				<Table.Cell>
					<div style={viewStyle}>{composer}</div>
					<Input
						type='text'
						value={this.state.composer}
						style={editStyle}
						placeholder={composer}
						name='composer'
						onKeyDown={this.handleEditDone}
						onChange={this.handleEditChange}
					/>
				</Table.Cell>
				<Table.Cell>
					<div style={viewStyle}>{performer}</div>
					<Input
						type='text'
						value={this.state.performer}
						style={editStyle}
						placeholder={performer}
						name='performer'
						onKeyDown={this.handleEditDone}
						onChange={this.handleEditChange}
					/>
				</Table.Cell>
				<Table.Cell>
					<div style={viewStyle}>{year}</div>
					<Input
						type='text'
						value={this.state.year}
						style={editStyle}
						placeholder={year}
						name='year'
						onKeyDown={this.handleEditDone}
						onChange={this.handleEditChange}
					/>
				</Table.Cell>
				<Table.Cell>
					<Button primary icon onClick={this.handleEdit}>
						<Icon name='edit'></Icon>
						Edit
					</Button>
					<Button secondary icon onClick={() => this.handleDelete(title)}>
						<Icon name='delete'></Icon>
						Delete
					</Button>
				</Table.Cell>
			</Table.Row>
		);
	}
};
