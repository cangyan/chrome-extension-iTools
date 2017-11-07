export default function reducer(state={
    width: null,
    height: null,
    remark: null,
    bg_color: null,
    font_color: null,
    has_display: false,
    hasError: false,
    output: null
}, action) {
    switch (action.type) {
        case "INIT": {
            return {
                ...state,
                hasError: false,
                output: null
            }
        }

        case "ERROR": {
            return {
                ...state,
                hasError: true,
                output: action.payload.output
            }
        }

        case "SUCCESS": {
            return {
                ...state,
                hasError: false,
                output: action.payload.output
            }
        }


        case "IMAGE_WIDTH_CHANGED": {
            return {
                ...state,
                width: action.payload.width,
                output: null,
                hasError: false
            }
        }

        case "IMAGE_HEIGHT_CHANGED": {
            return {
                ...state,
                height: action.payload.height,
                output: null,
                hasError: false
            }
        }

        case "IMAGE_REMARK_CHANGED": {
            return {
                ...state,
                remark: action.payload.remark
            }
        }

        case "IMAGE_BG_COLOR_CHANGED": {
            return {
                ...state,
                bg_color: action.payload.bg_color
            }
        }

        case "IMAGE_FONT_COLOR_CHANGED": {
            return {
                ...state,
                font_color: action.payload.font_color
            }
        }

        case "IMAGE_HAS_DISPLAY_CHANGED": {
            return {
                ...state,
                has_display: action.payload.has_display
            }
        }
    }

    return state;
}