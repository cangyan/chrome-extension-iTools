export function formatJsonString(content) {
    return {
        type: "JSON_FORMAT",
        payload: {
            type: 1,
            output: content
        }
    }
}

export function jsonStringToArray(content) {
    return {
        type: "JSON_TO_ARRAY",
        payload: {
            type: 2,
            output: content
        }
    }
}

export function jsonStringToURLParams(content) {
    return {
        type: "JSON_TO_URL_PARAMS",
        payload: {
            type: 3,
            output: content
        }
    }
}

export function formatJsonStringOneLine(content) {
    return {
        type: "JSON_FORMAT_ONE_LINE",
        payload: {
            type: 4,
            output: content
        }
    }
}