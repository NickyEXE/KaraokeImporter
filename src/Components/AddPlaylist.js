import React, { Component } from 'react';

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


    render(){
        console.log(this.state)
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
                <h3>Please keep in mind that Spotify's API only gives us the first 100 songs on your playlist.</h3><h3>If you're sharing a long playlist, split it up into parts!</h3>
            </center>
            )
    }

}

export default AddPlaylist