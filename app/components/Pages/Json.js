import React, {Component, PropTypes} from "react"
import {connect} from "react-redux";
import {TextField, RaisedButton} from 'material-ui';

import {formatJsonString, jsonStringToArray} from "../../actions/JsonAction"

@connect((store) => {
    return {
        output: store.JsonReducer.output
    };
})

export default class Json extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    componentDidUpdate() {
        this.refs.json_output.innerHTML = JSON.stringify(JSON.parse(this.props.output), null, 4);
    }

    render() {
        return (
            <div className="wrap">
                <div className="cLeft">
                    <TextField
                        hintText="请输入"
                        floatingLabelText="待处理JSON串"
                        multiLine={true}
                        fullWidth={true}
                        rows={1}
                        rowsMax={18}
                        ref="input"
                    />
                </div>
                <div className="cCenter">
                    <RaisedButton label="格式化" primary={true} onTouchTap={ () => this.handleFormatJsonString() }/>
                    <p />
                    <RaisedButton label="转为数组" primary={true} onTouchTap={ () => this.handleFormatJsonToArray() }/>
                </div>
                <div className="cRight">
                    <div id="output" name="output">
                        <pre ref="json_output" id="json_output">
                        </pre>
                    </div>
                </div>
            </div>
        )
    }

    handleFormatJsonString() {
        this.props.dispatch(formatJsonString(this.refs.input.getValue()));
    }

    handleFormatJsonToArray() {
        this.props.dispatch(jsonStringToArray(this.refs.input.getValue()));
    }
}