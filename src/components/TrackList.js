import React, { Component } from 'react';
import Track from './Track';
import _ from 'lodash';
import { Table } from 'semantic-ui-react';

export default class TrackList extends Component {
	handleEditTrack = (newTrack, oldTrack) => {
		console.log('trackListEdit', newTrack, oldTrack);
		this.props.editTrack(newTrack, oldTrack);
	};

	handleDeleteTrack = target => {
		this.props.deleteTrack(target);
	};

	render() {
		const { tracks } = this.props;

		return (
			<div>
				<h1>Track List</h1>
				<Table celled striped>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Title</Table.HeaderCell>
							<Table.HeaderCell>Movement</Table.HeaderCell>
							<Table.HeaderCell>Composer</Table.HeaderCell>
							<Table.HeaderCell>Performer</Table.HeaderCell>
							<Table.HeaderCell>Recording Year</Table.HeaderCell>
							<Table.HeaderCell>Options</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{_.map(tracks, ({ key, title, movement, composer, performer, year }) => (
							<Track
								key={title}
								title={title}
								movement={movement}
								composer={composer}
								performer={performer}
								year={year}
								handleEdit={this.handleEditTrack}
								handleDelete={this.handleDeleteTrack}
							/>
						))}
					</Table.Body>
				</Table>
			</div>
		);
	};
};
