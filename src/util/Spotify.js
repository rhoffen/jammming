import React from 'react';

const client_id=process.env.REACT_APP_SPOTIFY_CLIENT_KEY;

let token;

const Spotify = {

  async getAccessToken () {
    if (token) {
      return token;
    } else {
      const urltoFetch = 'https://accounts.spotify.com/authorize?'
      const queryResponseType = '&response_type=token';
      const queryRedirect = '&redirect_uri=http://localhost:3000/';
      const scopes = '&scope=user-read-private playlist-modify-private'
      const endpoint = `${urltoFetch}client_id=${client_id}${queryRedirect}${scopes}${queryResponseType}`
      try{
        console.log(endpoint)
        const response = await fetch(endpoint);
        if(response.ok){
          console.log(response);
        }
      }
      catch(error){
        console.log(error)
      }
    }
  },

  async search(term) {
    Spotify.getAccessToken();
  }
}

export default Spotify;
