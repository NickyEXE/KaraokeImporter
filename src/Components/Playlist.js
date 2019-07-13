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
        console.log(this.source + this.id)
        fetch(this.source + this.id)
        .then(res => res.json())
        .then(res => this.setState({...res}))
    }

    onReceived = (e) => console.log("I'm receiving", e)
    onConnected = (e) => console.log("I'm connected", e)
    onInitialized = (e) => console.log("I'm initialized", e)
    onDisconnected = (e) => console.log("I'm disconnected", e)


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
                <table>
                    <thead>
                        <tr>
                            <th>Title (Spotify)</th>
                            <th>Artist (Spotify)</th>
                            <th>Title (Karaoke Machine)</th>
                            <th>Artist (Karaoke Machine)</th>
                            <th>Code</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.songs.length > 0 && this.state.songs.map(song => <SongRow key={this.uuid()} playlistId={this.id} goToSongEdit={this.props.goToSongEdit} {...song}/>)}
                    </tbody>
                </table>
            </div>
            )
    }

}

export default Playlist