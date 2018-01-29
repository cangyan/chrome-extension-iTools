import React, {Component, PropTypes} from "react"
import {connect} from "react-redux";
import {TextField, RaisedButton, Checkbox} from 'material-ui';
import './style.scss';

@connect((store) => {
    return {
        originString: store.Base64ConvertReducer.originString,
        hasError: store.Base64ConvertReducer.hasError,
        output: store.Base64ConvertReducer.output
    };
})


export default class Base64ToImg extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.dispatch({
            type: "INIT",
            payload: {
            }
        });
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div className="StringWrap">
                <div className="cLeft">
                    <TextField
                        hintText="请输入"
                        floatingLabelText="data:image/jpeg;base64,..."
                        multiLine={true}
                        fullWidth={true}
                        rows={1}
                        rowsMax={18}
                        ref="input"
                    />
                </div>
                <div className="cCenter">
                    <RaisedButton label="转图片" labelStyle={{fontSize: '12px'}} primary={true} onTouchTap={ () => this.handleBase64ToImg() }/>
                    <p />
                </div>
                <div className="cRight">
                    <img src={this.props.output} />
                </div>
            </div>
        );
    }

    handleBase64ToImg() {
        this.props.dispatch(
            {
                type: "SUCCESS",
                payload: {
                    originString: this.refs.input.getValue(),
                    output: this.refs.input.getValue()
                }
            }
        );
    }
}