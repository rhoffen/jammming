import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
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
        }],
      playlistName: 'My Playlist',
      playlistTracks: [{name: 'Jungle Love', artist: 'Morris Day', album: 'The Time', id: 'songA'}]
      }
      this.addTrack = this.addTrack.bind(this);
    }

  addTrack(track) {
    if (this.state.playlistTracks.find(trackCompare => trackCompare.id === track.id)) {
      return;
    }
      console.log(`Before setState call, this.state.playlistTracks.length = ${this.state.playlistTracks.length}`);
      this.setState({playlistTracks: this.state.playlistTracks.push(track)});
      console.log(`After setState call, this.state.playlistTracks.length = ${this.state.playlistTracks.length}`);
      return;
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
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
            {console.log(`this.state.searchResults is an array: ${Array.isArray(this.state.searchResults)}`)}
            {console.log(`this.state.searchResults has length of: ${this.state.searchResults.length}`)}
            {console.log(`this.state.playlistTracks is an array: ${Array.isArray(this.state.playlistTracks)}`)}
            {console.log(`this.state.playlistTracks has length of: ${this.state.playlistTracks.length}`)}
          </div>

        </div>
      </div>
    );
  }
}

export default App;
