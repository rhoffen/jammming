import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {/*You will add a map method that renders a set of Track components*/}
        <ol>{this.props.tracks.map(track => (<li key={track.id}><Track onAdd={this.props.onAdd} track={track} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/></li>))}</ol>
      </div>
    )
  }
}
export default TrackList;
