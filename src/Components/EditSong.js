import React, { Component } from 'react';

class EditSong extends Component {

    state = {
        artist: "",
        id: "",
        spotify_artist: "",
        spotify_name: "",
        title: "",
        code: ""
    }

    componentDidMount(){
        fetch(`http://localhost:3000/songs/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(res => this.setState(res))
    }


    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/songs/${this.props.match.params.id}`, {
            method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({song: this.state})})
        this.props.goBack()
    }

    handleChange= (e) => {
        this.setState({[e.target.id]: e.target.value})
    }


    render(){
        console.log("props in edit song", this.props)
        return (
            <div className="card">
            <h1>Correct a song in the database!</h1>
            {this.state && this.state.title && 
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Title on Spotify:
                    <input readOnly placeholder={this.state.spotify_name} disabled={true} />
                    </label>
                    <br/>
                    <label>
                    Artist on Spotify:
                    <input readOnly placeholder={this.state.spotify_artist} disabled={true} />
                    </label>
                    <br/>
                    <label>
                    Title on Karaoke Machine:
                    <input type="text" value={this.state.title} id="title" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                    Artist on Karaoke Machine:
                    <input type="text" value={this.state.artist} id="artist" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                    Code on Karaoke Machine:
                    <input type="text" value={this.state.code} id="code" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                 </form>
            }
            </div>
            )
    }

}

export default EditSong