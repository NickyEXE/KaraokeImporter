import React, {Component} from 'react';
import './App.css';
import Playlist from './Components/Playlist'
import EditSong from './Components/EditSong'
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

render(){
  return (
    <Switch>
      <Route path='/playlists/new' render={(routeProps) => <AddPlaylist goToPlaylist={this.goToPlaylist} {...routeProps} />}/>
      <Route path='/playlists/:id' render={(routeProps) => <Playlist {...routeProps} goToSongEdit={this.goToSongEdit}/>}/>
      <Route path='/songs/:id/edit' render={(routeProps) => <EditSong goBack={this.goBack}  {...routeProps}/>}/>
    </Switch>
  );
}
}
export default App;
