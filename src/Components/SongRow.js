import React, { Component } from 'react';

class SongRow extends Component {



    render(){

        // <td><button onClick={() => this.props.goToSongEdit(this.props.id, this.props.playlistId)}>Edit</button></td>

        return (
            <div className="grid-container">
                <div className="song-code">{this.props.code}</div>
                <div className="spotify-song"><strong>{this.props.spotify_name}</strong> by {this.props.spotify_artist}</div>
                <div className="karaoke-song">{this.props.code && "(As: " + this.props.title +" by " + this.props.artist +")"}</div>                 
            </div>
            )
    }

}

export default SongRow