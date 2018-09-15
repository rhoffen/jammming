import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {/*You will add a map method that renders a set of Track components*/}
        {console.log(Array.isArray(this.props.tracks))}
        <ol>{this.props.tracks.map(track => <li key={track.id}>{<Track track={track}/>}</li>)}</ol>
      </div>
    )
  }
}
export default TrackList;
