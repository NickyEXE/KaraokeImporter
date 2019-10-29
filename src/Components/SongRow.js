import React, { Component } from 'react';
import { Holdable } from 'react-touch';

// let clicking = false

class SongRow extends Component {

    doIExist = () => this.props.song.code && this.props.song.code !== "0"

    handleClick = () => {
        this.props.selectMode ? this.props.selectSong(this.props.song) : this.props.goToSongEdit(this.props.song.id)
    } 
    handleHold = () => {
        this.props.selectSong(this.props.song)
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
            <Holdable
                onHoldComplete={this.handleHold}>
                <div onClick={this.handleClick} className={this.props.selectMode ? "grid-select" : "grid-container"}  >
                    {this.props.selectMode && <img className="checkbox" alt="checkbox" src={this.props.selected ? require("../assets/clicked.svg") : require("../assets/unclicked.svg")}/>}
                    <div className="song-code">{songCode()}</div>
                    <div className="spotify-song"><strong>{this.props.song.spotify_name}</strong> by {this.props.song.spotify_artist}</div>
                    {(this.props.playlistId !== 0) && <div className="karaoke-song">{this.doIExist() && "(As: " + this.props.song.title +" by " + this.props.song.artist +")"}</div>}
                </div>
            </Holdable>
            )
    }

}

export default SongRow