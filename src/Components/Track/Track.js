import React from 'react';
import './Track.css';


class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }

  //renderAction() {
  //  <a className = "Track-action">{this.props.isRemoval ? '-' : '+'}</a>
  //}

  addTrack() {
    this.props.onAdd(this.props.track);
    //<PlayList playlistTracks={this.props.track} />
    console.log(`The track you added was ${this.props.track.name}`);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action" onClick={this.addTrack}>{this.props.isRemoval ? '-' : '+'}</a>
      </div>
    )
  }
}

export default Track;
