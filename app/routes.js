import React from "react"
import {Route, IndexRoute} from "react-router"
import DashBoard from "./components/Pages/DashBoard/index"
import PageJson from "./components/Pages/Json/index"
import RandomString from "./components/Pages/RandomString/index"
import PageString from "./components/Pages/String/index"
import PageDeveloping from "./components/Pages/Developing/index"
import PageQRCode from "./components/Pages/QRCode/index"
import PageIdCard from "./components/Pages/IdCard/index"
import PageDateConvert from "./components/Pages/DateConvert/index"
import PageCreateImage from "./components/Pages/CreateImage/index"
import PageBase64ToImg from "./components/Pages/Base64Convert/index"

export default (
    <Route path="/" component={DashBoard}>
        <Route path="page_json" component={PageJson} />
        <Route path="page_random_string" component={RandomString} />
        <Route path="page_string" component={PageString} />
        <Route path="page_developing" component={PageDeveloping} />
        <Route path="page_qr_code" component={PageQRCode} />
        <Route path="page_date_convert" component={PageDateConvert} />
        <Route path="page_id_card" component={PageIdCard} />
        <Route path="page_create_image" component={PageCreateImage} />
        <Route path="page_base64_to_img" component={PageBase64ToImg} />
    </Route>
);