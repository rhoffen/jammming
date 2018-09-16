import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {/*You will add a map method that renders a set of Track components*/}
        {console.log(`In Tracklist, this.props.tracks is an array: ${Array.isArray(this.props.tracks)}`)}
        {console.log(`In Tracklist, this.props.tracks has length: ${this.props.tracks.length}`)}

        <ol>{this.props.tracks.map(track => (<li key={track.id}><Track onAdd={this.props.onAdd} track={track} /></li>))}</ol>
      </div>
    )
  }
}
export default TrackList;
