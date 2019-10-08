import React, { Component } from 'react';
import uuid from "uuid";
import SongRow from './SongRow.js'

class SongIndex extends Component {

    state = {
        songs:[],
        sortByArtist: true,
        search: ""
    }

    uuid=uuid.v4

    changeSort = () => this.setState(prevState => ({sortByArtist: !prevState.sortByArtist}))
    componentDidMount(){
        fetch(`https://serene-scrubland-24770.herokuapp.com/songs`)
        .then(res => res.json())
        .then(res => this.setState({songs: res}))
    }
    handleChange = (e) => this.setState({search: e.target.value})
    render(){
        const songs = this.state.sortByArtist ? this.state.songs.sort((a, b) => a.spotify_artist.localeCompare(b.spotify_artist)) : this.state.songs.sort((a, b) => a.spotify_name.localeCompare(b.spotify_name))
        const filteredSongs = songs.filter(song => song.spotify_artist.includes(this.state.search) || song.spotify_name.includes(this.state.search))
        return(
        <div>
        <h3><center>This represents all songs uploaded to our app, not all songs in the Karaoke book!</center></h3>
        <div onClick={this.changeSort} className="link edit-button">{this.state.sortByArtist ? "Sort by Title" : "Sort by Artist"}</div>
        <center><input type="text" value={this.state.title} placeholder="search for a song by title or artist!" id="search" onChange={this.handleChange} /></center>
        {filteredSongs.map(song => <SongRow key={this.uuid()} playlistId={this.id} goToSongEdit={this.props.goToSongEdit} {...song}/>)}</div>
        )}
}

export default SongIndex