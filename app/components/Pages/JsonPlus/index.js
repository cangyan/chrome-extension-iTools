import React, {Component} from "react"
import "./style.scss";
import JSONEditor from 'jsoneditor'
import "jsoneditor/dist/jsoneditor.min.css"
import "jsoneditor/dist/jsoneditor-minimalist"
import "ace-builds"
import "./custom.css"

export default class JsonPlus extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        let options = {
            modes: ['text', 'code', 'tree', 'form', 'view'],
            mode: 'code',
            ace: ace

        };

        let json = {};

        this.editor = new JSONEditor(this.container, options, json)
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <div className="jsonPlusPageWrap">
                <div className="fullWide" ref={(el) => {this.container = el}} />
            </div>
        )
    }
}