import React, { Component } from 'react';
import uuid from "uuid";
import SongTable from './SongTable.js'

class SongIndex extends Component {

    state = {
        songs:[],
        sortByArtist: true,
        search: "",
        selectedSongs: []
    }

    selectSong = (song) => this.state.selectedSongs.includes(song) ? this.setState({selectedSongs: this.state.selectedSongs.filter(num => num !== song)}) : this.setState({selectedSongs: [...this.state.selectedSongs, song]})

    uuid=uuid.v4

    changeSort = () => this.setState(prevState => ({sortByArtist: !prevState.sortByArtist}))
    componentDidMount(){
        fetch(`http://localhost:3000/songs`)
        .then(res => res.json())
        .then(res => this.setState({songs: res}))
    }
    handleChange = (e) => this.setState({search: e.target.value})
    render(){
        const songs = this.state.sortByArtist ? this.state.songs.sort((a, b) => a.spotify_artist.localeCompare(b.spotify_artist)) : this.state.songs.sort((a, b) => a.spotify_name.localeCompare(b.spotify_name))
        const filteredSongs = songs.filter(song => song.spotify_artist.toLowerCase().includes(this.state.search.toLowerCase()) || song.spotify_name.toLowerCase().includes(this.state.search.toLowerCase()))
        return(
            <div>
            <h3><center>This represents all songs uploaded to our app, not all songs in the Karaoke book!</center></h3>
            <div onClick={this.changeSort} className="link edit-button">{this.state.sortByArtist ? "Sort by Title" : "Sort by Artist"}</div>
            <center><input type="text" value={this.state.title} placeholder="search for a song by title or artist!" id="search" onChange={this.handleChange} /></center>
            <center className="helper">Press and hold any song to begin adding songs to your queue!</center>
            <SongTable 
                songs={filteredSongs} 
                goToSongEdit={this.props.goToSongEdit} 
                sendToQueue={this.props.sendToQueue}
            />
            </div>
        )}
}

export default SongIndex