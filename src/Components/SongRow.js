import React, { Component } from 'react';

let clicking = false

class SongRow extends Component {

    doIExist = () => this.props.song.code && this.props.song.code !== "0"

    onPointerDown = () => {
        if (this.props.selectMode){
            this.props.selectSong(this.props.song)
            clicking = false
        }
        else {
            clicking = setTimeout(() => {
                this.props.selectSong(this.props.song)
                clicking = false
            }, 1000)
        } 
    }
    
    onPointerUp = () => {
        clearTimeout(clicking)
        !!clicking && this.props.goToSongEdit(this.props.id)
        clicking = false
    }


    render(){
        const songCode = () => {
            switch (this.props.song.code){
                case "0":
                    return "None"
                case null:
                    return <div className="loader"></div>
                default:
                    return this.props.song.code
            }        
        }    
        return (
            <div className={this.props.selectMode ? "grid-select" : "grid-container"}  onPointerDown={this.onPointerDown} onPointerUp={this.onPointerUp} >
                {this.props.selectMode && <img className="checkbox" src={this.props.selected ? require("../assets/clicked.svg") : require("../assets/unclicked.svg")}/>}
                <div className="song-code">{songCode()}</div>
                <div className="spotify-song"><strong>{this.props.song.spotify_name}</strong> by {this.props.song.spotify_artist}</div>
        {this.props.playlistId && <div className="karaoke-song">{this.doIExist() && "(As: " + this.props.song.title +" by " + this.props.song.artist +")"}</div>}
            </div>
            )
    }

}

export default SongRow