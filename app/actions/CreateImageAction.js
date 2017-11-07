export function changeWidth(width) {
    let w = parseInt(width);

    if (isNaN(w) || 0 > w || w > 6000) {
        return {
            type: "ERROR",
            payload: {
                output: '宽度格式不正确'
            }
        }
    }

    return {
        type: "IMAGE_WIDTH_CHANGED",
        payload: {
            width: w,
            output: ''
        }
    }
}

export function changeHeight(height) {
    let h = parseInt(height);

    if (isNaN(h) || 0 > h || h > 6000) {
        return {
            type: "ERROR",
            payload: {
                output: '高度格式不正确'
            }
        }
    }

    return {
        type: "IMAGE_HEIGHT_CHANGED",
        payload: {
            height: h,
            output: ''
        }
    }
}


export function changeRemark(remark) {
    return {
        type: "IMAGE_REMARK_CHANGED",
        payload: {
            remark: remark
        }
    }
}


export function changeBgColor(color) {
    return {
        type: "IMAGE_BG_COLOR_CHANGED",
        payload: {
            bg_color: color
        }
    }
}


export function changeFontColor(color) {
    return {
        type: "IMAGE_FONT_COLOR_CHANGED",
        payload: {
            font_color: color
        }
    }
}

export function changeHasDisplay(hasDisplay) {
    return {
        type: "IMAGE_HAS_DISPLAY_CHANGED",
        payload: {
            has_display: hasDisplay
        }
    }
}

export function createImage(props) {
    console.log(props);
    let width = parseInt(props.imageWidth);
    let height = parseInt(props.imageHeight);
    if (isNaN(width) || isNaN(height) || (0 > width || width > 6000) || (0 > height || height > 6000)) {
        return {
            type: "ERROR",
            payload: {
                output: '宽/高度格式不正确'
            }
        }
    }

    return {
        type: "IMAGE_NEED_CREATE",
    }
}