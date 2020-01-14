import React, { Component } from 'react';
import PlaylistRow from './PlaylistRow.js'

export default class ImportPlaylists extends Component {

    state = {
        playlists: []
    }

    componentDidMount(){
        this.fetchPlaylists(0)
        // this.fetchPlaylists(50)
        // this.fetchPlaylists(100)
        // this.fetchPlaylists(150)
    }

    fetchPlaylists = (offset) => {
        const url = new URL("https://api.spotify.com/v1/me/playlists")
        const params = {limit: 50, offset: offset}
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.token
            }
        })
        .then(res => res.json())
        .then(res => this.handlePlaylists(res.items)) 
    }

    handlePlaylists = (playlists) => {
        console.log(playlists)
        const playlistArray = playlists.map(playlist => {
            const image = playlist.images[0] ? playlist.images[0].url : require("../assets/nicky_singing.jpg")
            return {name: playlist.name, description: playlist.description, image_url: image, id: playlist.id, fullData: playlist}
        })
        this.setState(prevState => ({playlists: [...prevState.playlists, ...playlistArray]}))
        // playlist name, image, description
    }
    
    token = this.props.location.hash.split("=")[1].split("&")[0]
    
    render(){
        console.log(this.state)
        return(
            <center>
                <h1>Select one of your playlists to import:</h1>
                <div className="playlist-index">{this.state.playlists.map(playlist => <PlaylistRow key={playlist.id} {...playlist} goToPlaylist={console.log}/>)}</div>
            </center>
        
            )
        
    }


}