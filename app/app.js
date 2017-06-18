import React from "react"
import ReactDOM from "react-dom"
import {Router, hashHistory} from "react-router"
import injectTapEventPlugin from "react-tap-event-plugin"
import { Provider } from 'react-redux'

import routes from "./routes"
import store from './store'

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);