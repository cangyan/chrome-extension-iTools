import React from "react"
import ReactDOM from "react-dom"
import {Router, hashHistory} from "react-router"
import injectTapEventPlugin from "react-tap-event-plugin"
import { Provider } from 'react-redux'

import routes from "./routes"
import store from './store'

injectTapEventPlugin();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('service worker registered'))
        .catch(() => console.log('service worker not registered'))
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);
