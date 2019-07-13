import React, { Component } from 'react';
import PlaylistRow from './PlaylistRow.js'
import uuid from "uuid";

class PlaylistIndex extends Component {

    state = {
        playlists: []
    }
    uuid=uuid.v4

    componentDidMount(){
        fetch("http://localhost:3000/playlists")
        .then(res => res.json())
        .then(res => this.setState({playlists: res}))
    }


    render(){
        console.log(this.state.playlists.length > 0)
        return (
            <div>
                <h1>This is a list of all the playlists in the database:</h1>
                <ul>
                {this.state.playlists.length > 0 && this.state.playlists.map(playlist => <li><a href={'/playlists/' + playlist.id}><strong>{playlist.name}</strong>: {playlist.description}</a></li>)}
                </ul>
            </div>
            )
    }

}

export default PlaylistIndex