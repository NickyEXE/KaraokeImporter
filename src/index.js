import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ActionCableProvider} from 'react-actioncable-provider';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { WEBSOCKET_ROOT } from './helpers/urls';
// import { BrowserRouter as Router} from 'react-router-dom';
// import {Route} from 'react-router-dom/Route';

// const API_WS_ROOT = 'ws://localhost:3000/cable'


ReactDOM.render(
    <ActionCableProvider url={WEBSOCKET_ROOT}>
         <Router>
            <Route path="/"  component={App} />
        </Router>
    </ActionCableProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
