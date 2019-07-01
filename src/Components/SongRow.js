import React, { Component } from 'react';

class SongRow extends Component {


    render(){
        console.log(this.props)
        return (
            <React.Fragment>
                <tr>
                <td>{this.props.spotify_name}</td>
                <td>{this.props.spotify_artist}</td>
                <td>{this.props.title}</td>
                <td>{this.props.artist}</td>
                <td>{this.props.code}</td>
                </tr>
            </React.Fragment>
            )
    }

}

export default SongRow