import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
          {
          name: 'I Would Die 4 U',
          artist: 'Prince',
          album: 'Purple Rain',
          id: 'song1'
          },
          {
          name: 'Seven',
          artist: 'Artist Formerly Known As Prince',
          album: 'Diamonds and Pearls',
          id: 'song2'
          },
          {
          name: 'Jhonny Jhonny',
          artist: 'unknown',
          album: 'Not on an album',
          id: 'song3'
          }
        ],
      playlistName: 'Rebecca Playlist',
      playlistTracks: [
        {
        name: 'Jungle Love',
        artist: 'Morris Day',
        album: 'The Time',
        id: 'songA'}
        ]
      }
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
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
    //track.uri not defined yet; using track id to test button
    let trackURIs = this.state.playlistTracks.map(track => track.id);
    console.log(`Array of track IDs to sub for URIs to test Save button: ${trackURIs}`);
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/*<!-- Add a SearchBar component -->*/}
          <SearchBar />
          <div className="App-playlist">
            {/*<!-- Add a SearchResults component -->*/}
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            {/*<!-- Add a Playlist component -->*/}
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
