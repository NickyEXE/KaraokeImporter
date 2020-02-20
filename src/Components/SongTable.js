import React, { Component } from 'react';
import uuid from "uuid";
import SongRow from './SongRow.js'
import QueueSendFooter from './QueueSendFooter.js'

class SongTable extends Component {

    state = {
        selectedSongs: []
    }

    sendToQueue = () => {
        this.props.sendToQueue(this.state.selectedSongs)
        this.setState({selectedSongs: []})
    }

    selectSong = (song) => this.state.selectedSongs.includes(song) ? this.setState({selectedSongs: this.state.selectedSongs.filter(num => num !== song)}) : this.setState({selectedSongs: [...this.state.selectedSongs, song]})

    uuid=uuid.v4

    handleChange = (e) => this.setState({search: e.target.value})
    render(){

        return(
        <div>
        {this.props.songs.map(song => {
        const playlistId = this.props.playlistId || 0 
        return (<SongRow key={this.uuid()} 
            selectMode={this.state.selectedSongs.length > 0} 
            selected={!!this.state.selectedSongs.includes(song)} 
            selectSong={this.selectSong} 
            song={song}
            playlistId={playlistId}
        />)})}
        {this.state.selectedSongs.length > 0 && <QueueSendFooter numSongs={this.state.selectedSongs.length} sendToQueue={this.sendToQueue}/>}
        </div>
        )}
}

export default SongTable