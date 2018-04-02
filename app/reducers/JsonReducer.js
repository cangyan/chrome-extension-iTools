export default function reducer(state={
    type: null,
    output: null
}, action) {
    switch (action.type) {
        case "INIT": {
            return {
                ...state,
                type: null,
                output: null
            }
        }
            
        case "JSON_FORMAT": {
            return {
                ...state,
                type: action.payload.type,
                output: action.payload.output,
            };
        }

        case "JSON_FORMAT_ONE_LINE": {
            return {
                ...state,
                type: action.payload.type,
                output: action.payload.output,
            };
        }

        case "JSON_TO_ARRAY": {
            return {
                ...state,
                type: action.payload.type,
                output: action.payload.output,
            };
        }

        case "JSON_TO_URL_PARAMS": {
            return {
                ...state,
                type: action.payload.type,
                output: action.payload.output,
            };
        }
    }

    return state;
}