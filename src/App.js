import React, {Component} from 'react';
import './App.css';
import Playlist from './Components/Playlist'
import PlaylistIndex from './Components/PlaylistIndex'
import EditSong from './Components/EditSong'
import Navigator from './Components/Navigator'
import AddPlaylist from './Components/AddPlaylist'
import { Route, Switch} from 'react-router-dom';


class App extends Component {


  goToSongEdit = (id) => {
    this.props.history.push(`/songs/${id}/edit`)
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

render(){
  return (
    <div>
    <Navigator goToNewPlaylist={this.goToNewPlaylist}/>
    <Switch>
      <Route path='/playlists/new' render={(routeProps) => <AddPlaylist goToPlaylist={this.goToPlaylist} {...routeProps} />}/>
      <Route path='/playlists/:id' render={(routeProps) => <Playlist {...routeProps} goToSongEdit={this.goToSongEdit}/>}/>
      <Route path='/playlists' render={(routeProps) => <PlaylistIndex {...routeProps} goToPlaylist={this.goToPlaylist}/>}/>
      <Route path='/songs/:id/edit' render={(routeProps) => <EditSong goBack={this.goBack}  {...routeProps}/>}/>
    </Switch>
    </div>
  );
}
}
export default App;
