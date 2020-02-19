import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import PlaylistRow from './PlaylistRow.js'

export default class ImportPlaylists extends Component {

    state = {
        playlists: [],
        redirect: null
    }

    componentDidMount(){
        this.fetchPlaylists(0)
        this.fetchPlaylists(50)
        this.fetchPlaylists(100)
        this.fetchPlaylists(150)
    }

    fetchPlaylists = (offset) => {
        const url = new URL("https://api.spotify.com/v1/me/playlists")
        const params = {limit: 50, offset: offset}
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.props.token
            }
        })
        .then(res => res.json())
        .then(res => this.handlePlaylists(res.items)) 
    }

    handlePlaylists = (playlists) => {
        const playlistArray = playlists.map(playlist => {
            const image = playlist.images[0] ? playlist.images[0].url : require("../assets/nicky_singing.jpg")
            return {name: playlist.name, description: playlist.description, image_url: image, id: playlist.id, fullData: playlist}
        })
        this.setState(prevState => ({playlists: [...prevState.playlists, ...playlistArray]}))
        // playlist name, image, description
    }

    handleClick = (playlist_url) => {
        fetch("https://serene-scrubland-24770.herokuapp.com/playlists/import", {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url: playlist_url}),
        })
        .then(res => res.json())
        .then(res => this.setState({redirect: "/playlists/" + res.id}))
    }

    
    render(){
        return(
            <center>
                <h1>Select one of your Spotify playlists to import:</h1>
                <div className="playlist-index">{this.state.playlists.map(playlist => <PlaylistRow key={playlist.id} {...playlist} goToPlaylist={() => this.handleClick(playlist.fullData.href)}/>)}</div>
                {this.state.redirect && <Redirect to={this.state.redirect}/>}
            </center>
        
            )
        
    }


}