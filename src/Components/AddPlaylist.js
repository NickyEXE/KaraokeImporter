import React, { Component } from 'react';

class AddPlaylist extends Component {

    state = {
        creator: "",
        url: ""
    }


    handleRes = (res) => {
        console.log("in handle res")
        console.log(res)
        if (res.id){
            console.log("in the if")
            this.props.goToPlaylist(res.id)
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/playlists`, {
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
            <div className="card">
            <h1>Add Your Playlist!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Your Name:
                    <input type="text" value={this.state.creator} id="creator" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                    Your Playlist URL (grab it from Spotify):
                    <input type="text" value={this.state.url} id="url" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            )
    }

}

export default AddPlaylist