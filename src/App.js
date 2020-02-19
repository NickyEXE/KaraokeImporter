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
import { Route, Switch} from 'react-router-dom';


class App extends Component {

  state = {
    queue: [],
    token: null
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

  componentDidMount(){
    // if the url has a spotify auth token, store it
    this.props.location.hash.split("=")[1] && this.setState({token: this.props.location.hash.split("=")[1].split("&")[0]})
  }

render(){
  const hostname = window && window.location && window.location.hostname
  console.log(hostname)
  return (
    <div className="centered">
    <Navigator goToQueue={this.goToQueue} goToNewPlaylist={this.goToNewPlaylist} goToPlaylists={this.goToPlaylists} songCount={this.state.queue.length} viewAllSongs={this.viewAllSongs}/>
    <Switch>
      <Route path='/playlists/new' render={(routeProps) => <AddPlaylist goToPlaylist={this.goToPlaylist} token={this.state.token} {...routeProps} />}/>
      <Route path='/playlists/:id' render={(routeProps) => <Playlist {...routeProps} 
        sendToQueue={this.sendToQueue}
        goToSongEdit={this.goToSongEdit}/>}/>
      <Route path='/queue' render={(routeProps) => <Queue {...routeProps} goToSongEdit={this.goToSongEdit} songs={this.state.queue}/>}/>
      <Route path='/playlists' render={(routeProps) => <PlaylistIndex {...routeProps} goToPlaylist={this.goToPlaylist}/>}/>
      <Route path='/songs/:id' render={(routeProps) => <SongShow goBack={this.goBack}  {...routeProps}/>}/>
      <Route path='/songs/' render={(routeProps) => <SongIndex 
        goBack={this.goBack}
        sendToQueue = {this.sendToQueue}
        goToSongEdit={this.goToSongEdit} 
        {...routeProps}/>}/>
      <Route exact path='/' render={(routeProps) => <Home {...routeProps} token={this.state.token} />}/>
    </Switch>
    </div>
    );
  }
}
export default App;
