export default function reducer(state={
    width: null,
    height: null,
    remark: null,
    bg_color: "#178",
    font_color: "#f61",
    has_display: false,
    hasError: false,
    needCreate: false,
    output: null
}, action) {
    switch (action.type) {
        case "INIT": {
            return {
                ...state,
                hasError: false,
                output: null,
                needCreate: false
            }
        }

        case "ERROR": {
            return {
                ...state,
                hasError: true,
                output: action.payload.output,
                needCreate: false
            }
        }

        case "SUCCESS": {
            return {
                ...state,
                hasError: false,
                output: action.payload.output,
                needCreate: false
            }
        }


        case "IMAGE_WIDTH_CHANGED": {
            return {
                ...state,
                width: action.payload.width,
                output: null,
                hasError: false,
                needCreate: false
            }
        }

        case "IMAGE_HEIGHT_CHANGED": {
            return {
                ...state,
                height: action.payload.height,
                output: null,
                hasError: false,
                needCreate: false
            }
        }

        case "IMAGE_REMARK_CHANGED": {
            return {
                ...state,
                remark: action.payload.remark,
                needCreate: false
            }
        }

        case "IMAGE_BG_COLOR_CHANGED": {
            return {
                ...state,
                bg_color: action.payload.bg_color,
                needCreate: false
            }
        }

        case "IMAGE_FONT_COLOR_CHANGED": {
            return {
                ...state,
                font_color: action.payload.font_color,
                needCreate: false
            }
        }

        case "IMAGE_HAS_DISPLAY_CHANGED": {
            return {
                ...state,
                has_display: action.payload.has_display,
                needCreate: false
            }
        }

        case "IMAGE_NEED_CREATE": {
            return {
                ...state,
                needCreate: true
            }
        }
    }

    return state;
}