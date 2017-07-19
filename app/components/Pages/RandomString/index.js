import React, {Component, PropTypes} from "react"
import {connect} from "react-redux";
import {TextField, RaisedButton, Checkbox} from 'material-ui';
import './style.scss';
import { createRandomString } from '../../../actions/RandomStringAction'

@connect((store) => {
    return {
        hasNumeric: store.RandomStringReducer.hasNumeric,
        hasUppercase: store.RandomStringReducer.hasUppercase,
        hasLowercase: store.RandomStringReducer.hasLowercase,
        stringLength: store.RandomStringReducer.stringLength,
        hasError: store.RandomStringReducer.hasError,
        output: store.RandomStringReducer.output
    };
})


export default class RandomString extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        var outputClass = this.props.hasError ? 'errorOutput' : 'successOutput';

        return (
            <div className="randomStringWrap">
                <div className="selectArea">
                    <div className="title">请选择生成参数:</div>
                    <Checkbox
                        label="数字(0-9)"
                        onCheck={ () => this.handleNumericChanged() }
                        defaultChecked={this.props.hasNumeric}
                    />
                    <Checkbox
                        label="字母(a-z)"
                        onCheck={ () => this.handleLowercaseChanged() }
                        defaultChecked={this.props.hasLowercase}
                    />
                    <Checkbox
                        label="字母(A-Z)"
                        onCheck={ () => this.handleUppercaseChanged() }
                        defaultChecked={this.props.hasUppercase}
                    />
                    <TextField
                        hintText="请输入字符串长度"
                        ref="input_string_length"
                    />
                    <p />
                    <RaisedButton
                        primary={true}
                        label="生成"
                        onTouchTap={ () => this.handleCreateString() }
                    />
                </div>
                <div className="outputArea">
                    <div className={outputClass}>
                        {this.props.output}
                    </div>
                </div>
            </div>
        )
    }

    handleNumericChanged() {
        this.props.dispatch(
            {
                type: "CHECKBOX_NUMERIC_CHANGED",
                payload: {
                    hasNumeric: !this.props.hasNumeric
                }
            }
        );
    }

    handleLowercaseChanged() {
        this.props.dispatch(
            {
                type: "CHECKBOX_LOWERCASE_CHANGED",
                payload: {
                    hasLowercase: !this.props.hasLowercase
                }
            }
        );
    }

    handleUppercaseChanged() {
        this.props.dispatch(
            {
                type: "CHECKBOX_UPPERCASE_CHANGED",
                payload: {
                    hasUppercase: !this.props.hasUppercase
                }
            }
        );
    }

    handleCreateString () {
        this.props.dispatch(createRandomString(
            this.props.hasNumeric,
            this.props.hasUppercase,
            this.props.hasLowercase,
            this.refs.input_string_length.getValue()
        ))
    }
}