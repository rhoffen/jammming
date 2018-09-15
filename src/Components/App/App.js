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
          }]
      }
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
            <SearchResults searchResults={this.state.searchResults}/>
            {/*<!-- Add a Playlist component -->*/}
            {/*<PlayList />*/}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
