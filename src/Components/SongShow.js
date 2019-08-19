import React, { Component } from 'react';

class SongShow extends Component {

    state = {
        artist: "",
        id: "",
        spotify_artist: "",
        spotify_name: "",
        title: "",
        code: "",
        correctASong: false
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

    showCorrectASong=()=>{
        this.setState(prevState => ({correctASong: !prevState.correctASong}))
    }


    render(){
        return (
            <div className="card song-show">
            <h1>{this.state.code}</h1>
            <h1><i>{this.state.spotify_name}</i> - {this.state.spotify_artist}</h1>
            <div onClick={this.showCorrectASong} className="link edit-button">Correct this song in our database</div>
            {this.state && this.state.correctASong && 
                <React.Fragment>
                <p>This app has to do a little bit of guessing to map your Spotify playlist to the karaoke book. If you spot something incorrect, please do us a solid and help out this project by updating that song data here! (Doing so will update this song's records globally!)</p>
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
                    <br/>
                    <br/>
                    <a href="http://www.singsingmedia.com/search">Go to Sing Sing Media's Website to Search Their Site</a>
                 </form>
                 </React.Fragment>
            }
            </div>
            )
    }

}

export default SongShow