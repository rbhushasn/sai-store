import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {App} from './component/index';
import history from './helper/history';
import store from './helper/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider> 
    , document.getElementById('root'));