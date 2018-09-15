import React from 'react';
import TrackList from '../TrackList/TrackList';
import './PlayList.css'

class PlayList extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"}/>
        <TrackList />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
        </div>
    );
  }
}

export default PlayList;
