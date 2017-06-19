import React, {Component, PropTypes} from "react"
import {connect} from "react-redux";
import {TextField, RaisedButton} from 'material-ui';

import {formatJsonString, jsonStringToArray} from "../../actions/JsonAction"

@connect((store) => {
    return {
        type: store.JsonReducer.type,
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
        switch (this.props.type) {
            case 1:
                try {
                    var json = JSON.parse(this.props.output);
                    this.refs.json_output.innerHTML = JSON.stringify(json, null, 4);
                } catch (e) {
                    this.refs.json_output.innerHTML = e;
                }
                break;
            case 2:
                try {
                    var json = JSON.parse(this.props.output);
                    var str = '';
                    for (var key in json) {
                        if (typeof json[key] === 'string') {
                            str += '"'+key+'"=>"'+json[key]+'",'
                        } else {
                            str += '"'+key+'"=>'+json[key]+','
                        }
                    }

                    str = '['+str.replace(/,$/, '')+']';

                    this.refs.json_output.innerHTML = str;
                } catch (e) {
                    this.refs.json_output.innerHTML = e;
                }
                break;
        }

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
                    <div>
                        <pre>
                            <code ref="json_output" id="json_output"></code>
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