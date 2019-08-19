import React, { Component } from 'react';
import PlaylistRow from './PlaylistRow.js'
import uuid from "uuid";

class PlaylistIndex extends Component {

    state = {
        playlists: []
    }
    uuid=uuid.v4

    componentDidMount(){
        fetch("https://serene-scrubland-24770.herokuapp.com/playlists")
        .then(res => res.json())
        .then(res => this.setState({playlists: res}))
    }


    render(){
        return (
            <center>
                <h1>This is a list of all the playlists in the database:</h1>
                <div className="playlist-index">{this.state.playlists.map(playlist => <PlaylistRow key={playlist.id} {...playlist} goToPlaylist={this.props.goToPlaylist}/>)}</div>
            </center>
            )
    }

}

export default PlaylistIndex