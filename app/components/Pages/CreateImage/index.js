import React, {Component, PropTypes} from "react"
import {connect} from "react-redux";
import {TextField, RaisedButton, Checkbox} from 'material-ui';
import './style.scss';
import { changeWidth, changeHeight, changeRemark, changeBgColor, changeFontColor, changeHasDisplay, createImage } from '../../../actions/CreateImageAction';
import ColorPicker from "material-ui-color-picker";

@connect((store) => {
    return {
        imageWidth: store.CreateImageReducer.width,
        imageHeight: store.CreateImageReducer.height,
        imageRemark: store.CreateImageReducer.remark,
        imageBgColor: store.CreateImageReducer.bg_color,
        imageFontColor: store.CreateImageReducer.font_color,
        hasDisplay: store.CreateImageReducer.has_display,
        hasError: store.CreateImageReducer.hasError,
        output: store.CreateImageReducer.output
    };
})


export default class CreateImage extends Component {
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
            <div className="createImageWrap">
                <div className="selectArea">
                    <div className="title">请指定参数:</div>
                    <TextField
                        id="input_image_width"
                        hintText="请输入图片宽度"
                        onChange={(event, value) => this.props.dispatch(changeWidth(value))}
                        ref="input_image_width"
                    />
                    <TextField
                        id="input_image_height"
                        hintText="请输入图片高度"
                        onChange={(event, value) => this.props.dispatch(changeHeight(value))}
                        ref="input_image_height"
                    />
                    <TextField
                        id="input_image_remark"
                        hintText="请输入备注(可选)"
                        onChange={(event, value) => this.props.dispatch(changeRemark(value))}
                        ref="input_image_remark"
                    />
                    <p />
                    请选择背景颜色:
                    <ColorPicker
                        name="input_image_bg_color"
                        defaultValue='#000'
                        onChange={color => this.props.dispatch(changeBgColor(color))}
                    />
                    请选择字体颜色:
                    <ColorPicker
                        name="input_image_font_color"
                        defaultValue='#f00'
                        onChange={color => this.props.dispatch(changeFontColor(color))}
                    />
                    <Checkbox
                        label="是否显示宽高"
                        onTouchTap={ () => this.handleDisplayWidthAndHeight() }
                        defaultChecked={this.props.hasDisplay}
                    />
                    <p />
                    <RaisedButton
                        primary={true}
                        label="生成图片"
                        onTouchTap={ () => this.handleCreateImage() }
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

    handleDisplayWidthAndHeight() {
        this.props.dispatch(changeHasDisplay(!this.props.hasDisplay));
    }

    handleCreateImage() {

    }
}