import React, {Component, PropTypes} from "react"
import {connect} from "react-redux";
import {TextField, RaisedButton, Checkbox} from 'material-ui';
import './style.scss';
import {decideIdCard} from '../../../actions/IdCardAction'

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

    rawMarkup() {
        var rawMarkup = this.props.output ? this.props.output : '';
        if (this.props.hasError) {
            rawMarkup = '<div style="color: red">'+rawMarkup+'</div>';
        } else {
            rawMarkup = '<div style="color: green">'+rawMarkup+'</div>';
        }

        return {__html: rawMarkup};
    }


    render() {
        return (
            <div className="IdCardWrap">
                <div className="cLeft">
                    <TextField
                        hintText="请输入"
                        floatingLabelText="待处理身份证"
                        multiLine={true}
                        fullWidth={true}
                        rows={1}
                        rowsMax={18}
                        ref="input"
                    />
                </div>
                <div className="cCenter">
                    <RaisedButton label="真伪查询" labelStyle={{fontSize: '12px'}} primary={true} onTouchTap={ () => this.handleIdCard() }/>
                </div>
                <div className="cRight" dangerouslySetInnerHTML={this.rawMarkup()}>
                </div>
            </div>
        );
    }

    handleIdCard() {
        this.props.dispatch(decideIdCard(this.refs.input.getValue()));
    }
}