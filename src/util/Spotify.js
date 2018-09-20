//import React from 'react';

const client_id=process.env.REACT_APP_SPOTIFY_CLIENT_KEY;
const queryRedirect = '&redirect_uri=http://localhost:3000/';

let accessToken;

const Spotify = {
  async getAccessToken() {
    //If there's an access token, return it.
    if (accessToken) {
      return accessToken;
    }
    //If access token not set yet, check the URL to see if it's there.
    let tokenArray=window.location.href.match(/access_token=([^&]*)/);
    let expiresArray=window.location.href.match(/expires_in=([^&]*)/);
    if (tokenArray && expiresArray) {
      accessToken=tokenArray[1];
      let expiresIn=expiresArray[1];
      window.setTimeout(() => accessToken = '', expiresIn*1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    //If there's no token and expiration in the URL, to to Spotify and get it
    } else {
        const urlToLogin = 'https://accounts.spotify.com/authorize?'
        const queryResponseType = '&response_type=token';
        const scopes = '&scope=playlist-modify-public';
        const authEndpoint = `${urlToLogin}client_id=${client_id}${queryRedirect}${scopes}${queryResponseType}`;
        window.location=authEndpoint;
      }
    },

  async search(term) {
    Spotify.getAccessToken();
    const baseUrl = 'https://api.spotify.com/v1';
    const searchParams = '/search?type=track&q=';
    let searchEndpoint = `${baseUrl}${searchParams}${term}`;
    console.log(`The search endpoint is ${searchEndpoint}`);
    return fetch(searchEndpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('There was an error')
        }
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return []
      } else {
        return jsonResponse.tracks.items.map(song => ({
          id: song.id,
          name: song.name,
          artist: song.artists[0].name,
          album: song.album.name,
          uri: song.uri
        }))
      }
    });
  },

  savePlaylist(playlistName, trackUriArray) {
    if (!playlistName || !trackUriArray) {
      return
    }
    let token=accessToken;
    let headers = {
      Authorization: `Bearer ${accessToken}`
    }
    let userId;
    return fetch(`https://api.spotify.com/v1/me`,{headers: headers}).then(response => {
      return response.json()}).then(jsonResponse => {
        userId = jsonResponse.id;
        console.log('userId:', userId);
        return userId;
      })
    }
  }


export default Spotify;
