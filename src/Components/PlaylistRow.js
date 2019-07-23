import React, { Component } from 'react';

class PlaylistRow extends Component {

    render(){
        return (
            <h1>
                <strong>{this.props.name}</strong>: {this.props.description}
            </h1>
            )
    }

}

export default PlaylistRow