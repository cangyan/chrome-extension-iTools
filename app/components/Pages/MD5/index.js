import React, {Component, PropTypes} from "react"
import {connect} from "react-redux";
import {TextField, RaisedButton, Checkbox} from 'material-ui';
import './style.scss';
import {createString} from '../../../actions/MD5Action'

@connect((store) => {
    return {
        originString: store.MD5StringReducer.originString,
        hasError: store.MD5StringReducer.hasError,
        output: store.MD5StringReducer.output
    };
})


export default class MD5 extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div className="wrap">
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
                    <RaisedButton label="生成MD5值" labelStyle={{fontSize: '12px'}} primary={true} onTouchTap={ () => this.handleCreateMD5String() }/>

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

    handleCreateMD5String() {
        this.props.dispatch(createString(this.refs.input.getValue()));
    }
}