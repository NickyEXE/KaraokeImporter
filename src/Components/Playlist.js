import React, { Component } from 'react';
import SongRow from './SongRow.js'

class Playlist extends Component {
    state = {
        name: "",
        description: "",
        songs: []
    }

    id = this.props.match.params.id
    source = "http://localhost:3000/playlists/"

    componentDidMount(){
        console.log(this.source + this.id)
        fetch(this.source + this.id)
        .then(res => res.json())
        .then(res => this.setState({...res}))
    }




    render(){
        console.log(this.state)
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Title (Spotify)</th>
                            <th>Artist (Spotify)</th>
                            <th>Title (Karaoke Machine)</th>
                            <th>Artist (Karaoke Machine)</th>
                            <th>Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.songs.length > 0 && this.state.songs.map(song => <SongRow {...song}/>)}
                    </tbody>
                </table>
            </div>
            )
    }

}

export default Playlist