import React, { Component } from 'react';

class SongRow extends Component {

    doIExist = () => this.props.code && this.props.code !== "0"

    render(){
        console.log(this.props.code)

        const songCode = () => {
            switch (this.props.code){
                case "0":
                    return "None"
                    break;
                case null:
                    return <div className="loader"></div>
                default:
                    return this.props.code
            }
        }

        // <td><button onClick={() => this.props.goToSongEdit(this.props.id, this.props.playlistId)}>Edit</button></td>

        return (
            <div className="grid-container" onClick={() => this.props.goToSongEdit(this.props.id)}>
                <div className="song-code">{songCode()}</div>
                <div className="spotify-song"><strong>{this.props.spotify_name}</strong> by {this.props.spotify_artist}</div>
                <div className="karaoke-song">{this.doIExist() && "(As: " + this.props.title +" by " + this.props.artist +")"}</div>                 
            </div>
            )
    }

}

export default SongRow