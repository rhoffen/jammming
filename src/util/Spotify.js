import React from 'react';

const client_id=process.env.REACT_APP_SPOTIFY_CLIENT_KEY;

let token;

class Spotify extends React.Component{
  constructor(props) {
    super(props);
    this.getAccessToken = this.getAccessToken.bind(this);
  }

  async getAccessToken () {
    if (token) {
      return token;
    } else {
      const urltoFetch = 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize?'
      const queryResponseType = '&response_type=token';
      const queryRedirect = 'redirect_uri=http://localhost:3000';
      const scopes = 'user-read-private playlist-modify-private'
      const endpoint = `${urltoFetch}client_id=${client_id}&${queryRedirect}&scope=${scopes}${queryResponseType}`
      try{
        const response = await fetch(endpoint);
        if(response.ok){
          console.log(response);
        }
      }
      catch(error){
        console.log(error)
      }
    }
  }
  render() {
    return (
      <div>
        <h1 onClick={this.getAccessToken}>Spotify app</h1>
      </div>
    );
  }
}

export default Spotify;
