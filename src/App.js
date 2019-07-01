import React, {Component} from 'react';
import './App.css';
import Playlist from './Components/Playlist'
import { Route, Switch} from 'react-router-dom';


class App extends Component {
render(){
  return (
    <Switch>
      <Route path='/playlists/:id' render={(routeProps) => <Playlist {...routeProps}/>}/>
    </Switch>
  );
}
}
export default App;
