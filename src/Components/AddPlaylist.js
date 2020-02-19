import React, { Component } from 'react';
import ImportPlaylists from './ImportPlaylists'

class AddPlaylist extends Component {

    state = {
        creator: "",
        url: ""
    }


    handleRes = (res) => {
        if (res.id){
            this.props.goToPlaylist(res.id)
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://serene-scrubland-24770.herokuapp.com/playlists`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(this.state),
        })
        .then(res => res.json())
        .then(res => this.handleRes(res))
    }

    handleChange= (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    renderLogin = () => {
        if (this.props.token){
          return(<ImportPlaylists token={this.props.token}/>)
        }
        else{
          return(
            <a href={`https://accounts.spotify.com/authorize?client_id=a752161e6a4047ee996898f99cdb045f&response_type=token&redirect_uri=https://singwithnicky.herokuapp.com/playlists/new&scope=playlist-read-private`}>
              <div className="edit-button">Login with Spotify to see and import your playlists!</div>
            </a>
            )
        }
      }


    render(){
        return (
            <center className="card">
            <h1>Add Your Playlist!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Your Name:
                    <br/>
                    <input type="text" value={this.state.creator} id="creator" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                    Your Playlist URL (grab it from Spotify):
                    <br/>
                    <input type="text" value={this.state.url} id="url" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <h1>or...</h1>                
                {this.renderLogin()}
            
            </center>

            )
    }

}

export default AddPlaylist