import React, {Component, PropTypes} from "react"
import {connect} from "react-redux";
import {TextField, RaisedButton, Checkbox} from 'material-ui';
import './style.scss';
import {stringURLDecode, calcStringLength, calcStringLengthWithChinese, convertURLEncodeStringToBulk} from '../../../actions/StringAction'
import {createMD5String} from '../../../actions/MD5Action'

@connect((store) => {
    return {
        originString: store.StringReducer.originString,
        hasError: store.StringReducer.hasError,
        output: store.StringReducer.output
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

    render() {
        return (
            <div className="StringWrap">
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
                    <RaisedButton label="URL Decode" labelStyle={{fontSize: '12px'}} primary={true} onTouchTap={ () => this.handleStringURLDecode() }/>
                    <p />
                    <RaisedButton label="MD5" labelStyle={{fontSize: '12px'}} primary={true} onTouchTap={ () => this.handleCreateMD5String() }/>
                    <p />
                    <RaisedButton label="字符串长度" labelStyle={{fontSize: '12px'}} primary={true} onTouchTap={ () => this.handleStringLength() }/>
                    <p />
                    <RaisedButton label="字符串长度(中文)" labelStyle={{fontSize: '12px'}} primary={true} onTouchTap={ () => this.handleStringLengthWithChinese() }/>
                    <p />
                    <RaisedButton label="postman-bulk" labelStyle={{fontSize: '12px'}} primary={true} onTouchTap={ () => this.handleURLEncodeStringToBulk() }/>
                </div>
                <div className="cRight">
                    <div>
                        <pre>
                            <code>{this.props.output}</code>
                        </pre>
                    </div>
                </div>
            </div>
        );
    }

    handleStringURLDecode() {
        this.props.dispatch(stringURLDecode(this.refs.input.getValue()));
    }

    handleCreateMD5String() {
        this.props.dispatch(createMD5String(this.refs.input.getValue()));
    }

    handleStringLength() {
        this.props.dispatch(calcStringLength(this.refs.input.getValue()));
    }

    handleStringLengthWithChinese() {
        this.props.dispatch(calcStringLengthWithChinese(this.refs.input.getValue()));
    }

    handleURLEncodeStringToBulk() {
        this.props.dispatch(convertURLEncodeStringToBulk(this.refs.input.getValue()));
    }
}