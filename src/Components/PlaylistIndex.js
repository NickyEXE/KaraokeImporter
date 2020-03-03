import React, { Component } from 'react';
import PlaylistRow from './PlaylistRow.js'
import uuid from "uuid";
import {API_ROOT} from '../helpers/urls.js'

class PlaylistIndex extends Component {

    state = {
        playlists: []
    }
    uuid=uuid.v4

    componentDidMount(){
        fetch(API_ROOT + "playlists")
        .then(res => res.json())
        .then(res => this.setState({playlists: res}))
    }


    render(){
        if (this.state.playlists.length > 0){
        return (
            <center>
                <h1>This is a list of all the playlists in the database:</h1>
                <div className="playlist-index">{this.state.playlists.map(playlist => <PlaylistRow key={playlist.id} {...playlist} goToPlaylist={this.props.goToPlaylist}/>)}</div>
            </center>
            )
        }
        else {
            return(<center><div className="huge-loader"></div></center>)
        }
    }

}

export default PlaylistIndex