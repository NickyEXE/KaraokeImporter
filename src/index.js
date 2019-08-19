import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ActionCableProvider} from 'react-actioncable-provider';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router} from 'react-router-dom';
// import {Route} from 'react-router-dom/Route';


const API_WS_ROOT = 'ws://serene-scrubland-24770.herokuapp.com/cable'


ReactDOM.render(
    <ActionCableProvider url={API_WS_ROOT}>
         <Router>
            <Route path="/"  component={App} />
        </Router>
    </ActionCableProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
