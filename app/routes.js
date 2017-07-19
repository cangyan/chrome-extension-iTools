import React from "react"
import {Route, IndexRoute} from "react-router"
import DashBoard from "./components/Pages/DashBoard/index"
import PageJson from "./components/Pages/Json/index"
import RandomString from "./components/Pages/RandomString/index"
import MD5 from "./components/Pages/MD5/index"

export default (
    <Route path="/" component={DashBoard}>
        <Route path="page_json" component={PageJson} />
        <Route path="page_random_string" component={RandomString} />
        <Route path="page_md5" component={MD5} />
    </Route>
);