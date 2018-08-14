import React, { Component } from 'react';
import TrackList from './components/TrackList';
import AddTrack from './components/AddTrack';

export default class App extends Component {
	state = {
		tracks: []
	};

	upload = metadata => { // Saves inputs from AddTrack.js to state
		this.setState({
			tracks: [...this.state.tracks, {
				title: metadata.title,
				movement: metadata.movement,
				composer: metadata.composer,
				performer: metadata.performer,
				year: metadata.year
			}]
		});
	};

	editTrack = (newTrack, oldTrack) => {
		const { tracks } = this.state;
		this.setState({
			tracks: tracks.map(track => track.title === oldTrack.title ? newTrack : oldTrack)
		});
	};

	deleteTrack = target => {
		this.setState({
			tracks: this.state.tracks.filter(track => track.title !== target)
		});
	};

  render() {
    return (
      <div className='ui container'>
	      {!!this.state.tracks.length ?
		      <TrackList
			      tracks={this.state.tracks}
			      editTrack={this.editTrack}
			      deleteTrack={this.deleteTrack}
		      /> :
		      <h1>TRACK LIST EMPTY</h1>
	      }
	      <AddTrack upload={this.upload} />
	      <button onClick={() => console.log(this.state)}>a</button>
      </div>
    );
  }
};
