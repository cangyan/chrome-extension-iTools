import React, {Component, PropTypes} from "react"
import {connect} from "react-redux";
import {TextField, RaisedButton, Checkbox} from 'material-ui';
import './style.scss';
import {createQRCode} from '../../../actions/QRCodeAction'

@connect((store) => {
    return {
        originString: store.QRCodeReducer.originString,
        hasError: store.QRCodeReducer.hasError,
        output: store.QRCodeReducer.output
    };
})


export default class MD5 extends Component {
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

    rawMarkup() {
        var rawMarkup = this.props.output;
        return {__html: rawMarkup};
    }

    render() {
        return (
            <div className="QRWrap">
                <div className="cLeft">
                    <TextField
                        hintText="请输入"
                        floatingLabelText="待处理字符串"
                        multiLine={true}
                        fullWidth={true}
                        rows={1}
                        rowsMax={18}
                        ref="input"
                    />
                </div>
                <div className="cCenter">
                    <RaisedButton label="生成二维码" labelStyle={{fontSize: '12px'}} primary={true} onTouchTap={ () => this.handleCreateQRCode() }/>
                </div>
                <div className="cRight" dangerouslySetInnerHTML={this.rawMarkup()}>
                </div>
            </div>
        );
    }

    handleCreateQRCode() {
        this.props.dispatch(createQRCode(this.refs.input.getValue()));
    }
}