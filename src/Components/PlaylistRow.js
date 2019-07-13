import React, { Component } from 'react';

class PlaylistRow extends Component {

    render(){
        console.log(this.props)
        return (
            <h1>
                <strong>{this.props.name}</strong>: {this.props.description}
            </h1>
            )
    }

}

export default PlaylistRow