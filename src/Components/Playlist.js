import React, { Component } from 'react';
import SongRow from './SongRow.js';
import {ActionCableConsumer} from 'react-actioncable-provider';
import uuid from "uuid";


class Playlist extends Component {
    state = {
        name: "",
        description: "",
        songs: []
    }

    id = this.props.match.params.id
    source = "http://localhost:3000/playlists/"

    uuid=uuid.v4

    componentDidMount(){
        fetch(this.source + this.id)
        .then(res => res.json())
        .then(res => this.setState({...res}))
    }

    onReceived = (payload) => {
        this.setState({songs: [...this.state.songs.filter((song) => song.id !== payload.id), payload]})
    }

    render(){
        return (
            <div>
                <ActionCableConsumer
                channel= {{channel: 'PlaylistChannel', id: this.id}}
                onConnected= {this.onConnected}
                onReceived= {this.onReceived}
                onInitialized= {this.onInitialized}
                onDisconnected={this.onDisconnected}
                />
                {this.state.songs.length > 0 && this.state.songs.sort((songA, songB) => songA.spotify_artist.localeCompare(songB.spotify_artist)).map(song => <SongRow key={this.uuid()} playlistId={this.id} goToSongEdit={this.props.goToSongEdit} {...song}/>)}
            </div>
            )
    }

}

export default Playlist