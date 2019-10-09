import React, { Component } from 'react';
import SongRow from './SongRow.js';
import {ActionCableConsumer} from 'react-actioncable-provider';
import uuid from "uuid";


class Playlist extends Component {
    state = {
        name: "",
        description: "",
        songs: [],
        selectedSongs: []
    }

    selectSong = (id) => this.state.selectedSongs.includes(id) ? this.setState({selectedSongs: this.state.selectedSongs.filter(num => num !== id)}) : this.setState({selectedSongs: [...this.state.selectedSongs, id]})

    id = this.props.match.params.id
    source = "https://serene-scrubland-24770.herokuapp.com/playlists/"

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

    render(){
        // console.log(this.state)
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

                {this.state.songs.length > 0 && this.state.songs.sort((songA, songB) => songA.spotify_artist.localeCompare(songB.spotify_artist)).map(song => <SongRow key={this.uuid()} selectMode={this.state.selectedSongs.length > 0} selected={!!this.state.selectedSongs.includes(song.id)}selectSong={this.selectSong} playlistId={this.id} goToSongEdit={this.props.goToSongEdit} {...song}/>)}
            </div>
            )
    }

}

export default Playlist