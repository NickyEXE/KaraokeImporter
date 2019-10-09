import React, { Component } from 'react';

class SongIndexRow extends Component {

    doIExist = () => this.props.code && this.props.code !== "0"

    render(){

        const songCode = () => {
            switch (this.props.code){
                case "0":
                    return "None"
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
                <div className="spotify-song"><strong>{this.props.title}</strong> by {this.props.artist}</div>
                {/* <div className="karaoke-song">{this.doIExist() && "(As: " + this.props.title +" by " + this.props.artist +")"}</div>                  */}
            </div>
            )
    }

}

export default SongIndexRow