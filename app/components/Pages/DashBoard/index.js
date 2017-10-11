import React, {Component, PropTypes} from "react"
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, Drawer, MenuItem, Paper, FlatButton, ListItem} from 'material-ui';
import * as constants from '../../../constant';
import {Link} from 'react-router';
import "./style.scss";

let muiTheme = getMuiTheme({
    fontFamily: 'Microsoft YaHei'
});

export default class DashBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    render() {
        let menuList = [];

        for (var i = 0; i < constants.menuList.length; i++) {
            var subMenu = [];
            for (var j = 0; j < constants.menuList[i].childList.length; j++) {
                var key = "sub_menu_"+j;
                var url = "/" + constants.menuList[i].childList[j]['url'];
                var name = constants.menuList[i].childList[j]['name'];
                subMenu.push(<MenuItem key={key} containerElement={<Link to={url} />}>{name}</MenuItem>);
            }

            var key = "menu_" + i;
            var text = constants.menuList[i].name;
            var initOpen = i == 0 ? true : false;

            menuList.push(<ListItem key={key} primaryText={text} initiallyOpen={initOpen} nestedItems={subMenu} />);
        }

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar
                        title="程序员常用工具集"
                        onLeftIconButtonTouchTap={ () => this.handleLeftIconButtonTouchTap() }
                    />

                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                    >
                        <MenuItem containerElement={<Link to="/"/>}>首页</MenuItem>
                        {
                            menuList
                        }

                    </Drawer>
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }

    handleLeftIconButtonTouchTap() {
        this.setState({open: !this.state.open});
    }
}