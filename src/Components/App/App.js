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
    //track.uri not defined yet; using track id to test button
    let trackURIs = this.state.playlistTracks.map(track => track.id);
    console.log(`Array of track IDs to sub for URIs to test Save button: ${trackURIs}`);
  }

  search(term) {
    // let results = Spotify.search(term);
    // console.log('Here is results:', results);
    // console.log(`results is an array: ${Array.isArray(results)}`)
    // let displaySearch = this.state.searchResults;
    // results.map(newTrack => displaySearch.push(newTrack));
    // this.setState({searchResults: displaySearch});
    Spotify.search(term).then(results => {
      this.setState({searchResults: results})
    }).then(console.log('Here is state now:', this.state.searchResults));
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/*<!-- Add a SearchBar component -->*/}
          <SearchBar onSearch={this.search}/>
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
