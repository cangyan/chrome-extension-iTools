export function formatJsonString(content) {
    return {
        type: "JSON_FORMAT",
        payload: {
            output: content
        }
    }
}

export function jsonStringToArray(content) {
    return {
        type: "JSON_TO_ARRAY",
        payload: {
            output: content
        }
    }
}