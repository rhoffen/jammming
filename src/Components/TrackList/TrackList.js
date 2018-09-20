import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {/*You will add a map method that renders a set of Track components*/}
        <ol>{this.props.tracks.map(song => (<li key={song.id}><Track onAdd={this.props.onAdd} track={song} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/></li>))}</ol>
      </div>
    )
  }
}
export default TrackList;
