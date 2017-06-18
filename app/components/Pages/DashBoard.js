import React, {Component, PropTypes} from "react"
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, Drawer, MenuItem, Paper, FlatButton} from 'material-ui';
import {Link} from 'react-router';

let muiTheme = getMuiTheme({
    fontFamily: 'Microsoft YaHei'
});

export default class DashBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar
                        title="开发工具集合"
                        onLeftIconButtonTouchTap={ () => this.handleLeftIconButtonTouchTap() }
                    />

                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                    >

                        <MenuItem containerElement={<Link to="/"/>}>首页</MenuItem>
                        <MenuItem containerElement={<Link to="/page_json"/>}>JSON</MenuItem>
                    </Drawer>

                    <div className="authorInfo">Author: me.wmf@foxmail.com</div>
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