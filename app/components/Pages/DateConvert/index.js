import React, {Component, PropTypes} from "react"
import {connect} from "react-redux";
import {TextField, RaisedButton, SelectField, MenuItem} from 'material-ui';
import './style.scss';
import { conventDateTimeStringToTimestamp, conventTimestampToDateTimeString, conventDateToString, conventDateToTimestamp } from '../../../actions/DateConvertAction'

@connect((store) => {
    return {
        originString: store.DateConvertReducer.originString,
        hasError: store.DateConvertReducer.hasError,
        output: store.DateConvertReducer.output,
        dateFormat: store.DateConvertReducer.dateFormat
    };
})


export default class DateConvert extends Component {
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
        var outputClass = this.props.hasError ? 'errorOutput' : 'successOutput';

        return (
            <div className="DateConvertWrap">
                <div className="selectArea">
                    <div className="split-line" />
                    <p />
                    <RaisedButton
                        primary={true}
                        label="当前时间Y-m-d H:i:s.u"
                        labelStyle={{textTransform: "none"}}
                        onTouchTap={ () => this.handleCreateCurrentDateString() }
                    />
                    <p />
                    <RaisedButton
                        primary={true}
                        label="当前时间时间戳"
                        labelStyle={{textTransform: "none"}}
                        onTouchTap={ () => this.handleCreateCurrentTimestamp() }
                    />

                    <p />
                    <div className="split-line" />

                    <TextField
                        hintText="请输入时间戳"
                        ref="input_timestamp"
                    />
                    <SelectField
                        floatingLabelText="请输入转换格式"
                        value={this.props.dateFormat}
                        onChange={ (event, index, value) => this.handleDateFormatChange(value)}
                        ref="input_date_format"
                    >
                        <MenuItem value={'yyyy-mm-dd HH:MM:ss'} primaryText="Y-m-d H:i:s" />
                        <MenuItem value={'yyyy-mm-dd HH:MM:ss.l'} primaryText="Y-m-d H:i:s.u" />
                    </SelectField>
                    <p />
                    <RaisedButton
                        primary={true}
                        label="时间戳转日期"
                        labelStyle={{textTransform: "none"}}
                        onTouchTap={ () => this.handleTimestampToDate() }
                    />
                    <p />
                    <div className="split-line" />
                    <TextField
                        hintText="请输入时间字符串"
                        ref="input_datetime_string"
                    />
                    <p />
                    <RaisedButton
                        primary={true}
                        label="日期转时间戳"
                        labelStyle={{textTransform: "none"}}
                        onTouchTap={ () => this.handleDatetimeToTimestamp() }
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

    handleCreateCurrentDateString() {
        var mDate = new Date();
        this.props.dispatch(conventDateToString(
            mDate,
            'yyyy-mm-dd HH:MM:ss.l'
        ))
    }

    handleCreateCurrentTimestamp() {
        var mDate = new Date();
        this.props.dispatch(conventDateToTimestamp(
            mDate
        ))
    }

    handleDateFormatChange(value) {
        this.props.dispatch(
            {
                type: "DATE_FORMAT_CHANGE",
                payload: {
                    dateFormat: value
                }
            }
        );
    }

    handleTimestampToDate() {
        this.props.dispatch(conventTimestampToDateTimeString(
            this.refs.input_timestamp.getValue(),
            this.refs.input_date_format.props.value
        ))
    }

    handleDatetimeToTimestamp() {
        this.props.dispatch(conventDateTimeStringToTimestamp(
            this.refs.input_datetime_string.getValue(),
        ))
    }
}