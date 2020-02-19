import React, { Component } from 'react';
import SongTable from './SongTable.js';
import {ActionCableConsumer} from 'react-actioncable-provider';
import {API_ROOT} from '../helpers/urls.js'

import uuid from "uuid";


class Playlist extends Component {
    state = {
        name: "",
        description: "",
        songs: []
    }

    id = this.props.match.params.id
    source = API_ROOT + "playlists/"

    uuid=uuid.v4

    componentDidMount(){
        fetch(this.source + this.id)
        .then(res => res.json())
        .then(res => this.setState({...res}))
    }

    onReceived = (payload) => {
        this.setState({songs: [...this.state.songs.filter((song) => song.id !== payload.id), payload]})
    }

    onConnected= () => {
        console.log("we're connected")
    }

    selectSong = (song) => this.state.selectedSongs.includes(song) ? this.setState({selectedSongs: this.state.selectedSongs.filter(num => num !== song)}) : this.setState({selectedSongs: [...this.state.selectedSongs, song]})

    render(){
        const sortedSongs = this.state.songs.sort((songA, songB) => songA.spotify_artist.localeCompare(songB.spotify_artist))
        return (
            <div>
                <ActionCableConsumer
                channel= {{channel: 'PlaylistChannel', id: this.id}}
                onConnected= {this.onConnected}
                onReceived= {this.onReceived}
                onInitialized= {this.onInitialized}
                onDisconnected={this.onDisconnected}
                />
                <h3 className="playlist-title">{this.state.name}</h3>
                <img className="playlist-header" src={this.state.image_url} alt={this.state.name} />
                <center><p className="playlist-author">Created by <b>{this.state.creator}</b></p></center>
                <center className="helper">Press and hold any song to begin adding songs to your queue!</center>
                <SongTable 
                    songs={sortedSongs} 
                    goToSongEdit={this.props.goToSongEdit} 
                    sendToQueue={this.props.sendToQueue}
                    playlistId = {this.props.match.params.id}
                />
            </div>
            )
    }

}

export default Playlist