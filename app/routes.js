import React from "react"
import {Route, IndexRoute} from "react-router"
import DashBoard from "./components/Pages/DashBoard"
import PageJson from "./components/Pages/Json"

export default (
    <Route path="/" component={DashBoard}>
        <Route path="page_json" component={PageJson} />
    </Route>
);