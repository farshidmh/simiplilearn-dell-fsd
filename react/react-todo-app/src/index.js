import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import App from './App';
import appReducers from "./reducers";


const appStore = createStore(
    appReducers,
    compose(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <Provider store={appStore}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

