import React, { Component } from 'react';

class SongRow extends Component {

    render(){
        console.log(this.props)
        return (
            <React.Fragment>
                <tr>
                <td>{this.props.spotify_name}</td>
                <td>{this.props.spotify_artist}</td>
                <td>{this.props.code ? this.props.title : <div className="loader"></div>}</td>
                <td>{this.props.code ? this.props.artist : <div className="loader"></div>}</td>
                <td>{this.props.code ? this.props.code : <div className="loader"></div>}</td>
                <td><button onClick={() => this.props.goToSongEdit(this.props.id, this.props.playlistId)}>Edit</button></td>
                </tr>
            </React.Fragment>
            )
    }

}

export default SongRow