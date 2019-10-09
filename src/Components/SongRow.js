import React, { Component } from 'react';

let clicking = false

class SongRow extends Component {

    doIExist = () => this.props.code && this.props.code !== "0"

    onMouseDown = () => {
        if (this.props.selectMode){
            this.props.selectSong(this.props.id)
            clicking = false
        }
        else {
            clicking = setTimeout(() => {
                this.props.selectSong(this.props.id)
                clicking = false
            }, 1000)
        } 
    }
    
    onMouseUp = () => {
        clearTimeout(clicking)
        !!clicking && this.props.goToSongEdit(this.props.id)
        clicking = false
    }


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
        return (
            <div className={this.props.selectMode ? "grid-select" : "grid-container"} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} >
                {this.props.selectMode && <div className="checkbox">{this.props.selected ? "☑" : "☐"}</div>}
                <div className="song-code">{songCode()}</div>
                <div className="spotify-song"><strong>{this.props.spotify_name}</strong> by {this.props.spotify_artist}</div>
                <div className="karaoke-song">{this.doIExist() && "(As: " + this.props.title +" by " + this.props.artist +")"}</div>                 
            </div>
            )
    }

}

export default SongRow