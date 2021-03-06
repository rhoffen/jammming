import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';
import Spotify from '../../util/Spotify'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
      }
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);
    }

  addTrack(track) {
    if (this.state.playlistTracks.find(trackCompare => trackCompare.id === track.id)) {
      return;
      }
      let newPlaylist=this.state.playlistTracks;
      newPlaylist.push(track);
      this.setState({playlistTracks: newPlaylist});
      return;
  }

  removeTrack(track) {
    let updatePlaylist = this.state.playlistTracks.filter(song => song.id !== track.id);
    this.setState({playlistTracks: updatePlaylist});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
    let name = this.state.playlistName;
    Spotify.savePlaylist(name, trackURIs).then(()=>{
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
        })
    }).then(()=> {
        console.log(`The playlist name after setState is ${this.state.playlistName}`);
      }); //Close codeblock of .then, then close .then
  } //close of savePlaylist

  search(term) {
    Spotify.search(term).then(results => {
      this.setState({searchResults: results})
    }).then(console.log('Here is state now:', this.state.searchResults));
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/*<!-- SearchBar component -->*/}
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            {/*<!-- SearchResults component -->*/}
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            {/*<!-- Playlist component -->*/}
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
