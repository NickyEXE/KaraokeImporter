import React, {Component} from 'react';
import './App.css';
import Playlist from './Components/Playlist'
import PlaylistIndex from './Components/PlaylistIndex'
import SongShow from './Components/SongShow'
import SongIndex from './Components/SongIndex'
import Navigator from './Components/Navigator'
import AddPlaylist from './Components/AddPlaylist'
import Home from './Components/Home'
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
  sendToQueue = (songList) => {
    // debugger
    this.setState({queue: this.state.queue.concat(songList)})
  }

render(){
  const mainStyle ={
    // maxWidth: '500px',
    align: 'center'
  }
  return (
    <div style={mainStyle}>
    <Navigator goToNewPlaylist={this.goToNewPlaylist} goToPlaylists={this.goToPlaylists} songCount={this.state.queue.length} viewAllSongs={this.viewAllSongs}/>
    <Switch>
      <Route path='/playlists/new' render={(routeProps) => <AddPlaylist goToPlaylist={this.goToPlaylist} {...routeProps} />}/>
      <Route path='/playlists/:id' render={(routeProps) => <Playlist {...routeProps} 
        sendToQueue={this.sendToQueue}
        goToSongEdit={this.goToSongEdit}/>}/>
      <Route path='/playlists' render={(routeProps) => <PlaylistIndex {...routeProps} goToPlaylist={this.goToPlaylist}/>}/>
      <Route path='/songs/:id' render={(routeProps) => <SongShow goBack={this.goBack}  {...routeProps}/>}/>
      <Route path='/songs/' render={(routeProps) => <SongIndex 
        goBack={this.goBack}
        sendToQueue = {this.sendToQueue}
        goToSongEdit={this.goToSongEdit} 
        {...routeProps}/>}/>
      <Route exact path='/' render={(routeProps) => <Home {...routeProps}/>}/>
    </Switch>
    </div>
    );
  }
}
export default App;
