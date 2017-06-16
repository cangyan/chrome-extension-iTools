import React, {Component, PropTypes} from "react"
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, Drawer, MenuItem, Paper, FlatButton} from 'material-ui';
import { Link } from 'react-router';

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
                        title="飞凡运营工具"
                        onLeftIconButtonTouchTap={ () => this.handleLeftIconButtonTouchTap() }
                    />

                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                    >
                        <Link to="/">
                            <MenuItem>首页</MenuItem>
                        </Link>
                        <Link to="/upload_images">
                            <MenuItem>批量上传图片</MenuItem>
                        </Link>
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