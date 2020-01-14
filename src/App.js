import React, {Component} from 'react';
import './App.css';
import Playlist from './Components/Playlist'
import PlaylistIndex from './Components/PlaylistIndex'
import SongShow from './Components/SongShow'
import SongIndex from './Components/SongIndex'
import Queue from './Components/Queue'
import Navigator from './Components/Navigator'
import AddPlaylist from './Components/AddPlaylist'
import Home from './Components/Home'
import ImportPlaylists from './Components/ImportPlaylists'
import { Route, Switch} from 'react-router-dom';


class App extends Component {

  state = {
    queue: []
  }

  goToSongEdit = (songId, playlistId) => {
    this.props.history.push(`/songs/${songId}`)
  }

  goBack = () => {
    this.props.history.goBack();
  }
  
  goToPlaylist = (id) => {
    this.props.history.push(`/playlists/${id}`)
  }

  goToNewPlaylist = () => {
    this.props.history.push(`/playlists/new`)
  }

  goToPlaylists = () => {
    this.props.history.push(`/playlists`)
  }

  viewAllSongs = () => {
    this.props.history.push('/songs')
  }

  goToQueue = () => {
    this.props.history.push('/queue')
  }

  sendToQueue = (songList) => {
    this.setState({queue: this.state.queue.concat(songList)})
  }

render(){
  return (
    <div className="centered">
    <Navigator goToQueue={this.goToQueue} goToNewPlaylist={this.goToNewPlaylist} goToPlaylists={this.goToPlaylists} songCount={this.state.queue.length} viewAllSongs={this.viewAllSongs}/>
    <Switch>
      <Route path='/playlists/new' render={(routeProps) => <AddPlaylist goToPlaylist={this.goToPlaylist} {...routeProps} />}/>
      <Route path='/playlists/:id' render={(routeProps) => <Playlist {...routeProps} 
        sendToQueue={this.sendToQueue}
        goToSongEdit={this.goToSongEdit}/>}/>
      <Route path='/queue' render={(routeProps) => <Queue {...routeProps} goToSongEdit={this.goToSongEdit} songs={this.state.queue}/>}/>
      <Route path='/playlists' render={(routeProps) => <PlaylistIndex {...routeProps} goToPlaylist={this.goToPlaylist}/>}/>
      <Route path='/songs/:id' render={(routeProps) => <SongShow goBack={this.goBack}  {...routeProps}/>}/>
      <Route path='/user_auth' render={(routeProps) => <ImportPlaylists goBack={this.goBack}  {...routeProps}/>}/>
      <Route path='/songs/' render={(routeProps) => <SongIndex 
        goBack={this.goBack}
        sendToQueue = {this.sendToQueue}
        goToSongEdit={this.goToSongEdit} 
        {...routeProps}/>}/>
      <Route exact path='/' render={(routeProps) => <Home {...routeProps}/>}/>
    </Switch>
    <a href={`https://accounts.spotify.com/authorize?client_id=a752161e6a4047ee996898f99cdb045f&response_type=token&redirect_uri=http://localhost:3001/user_auth/&scope=playlist-read-private`}>Login</a>
    </div>
    );
  }
}
export default App;
