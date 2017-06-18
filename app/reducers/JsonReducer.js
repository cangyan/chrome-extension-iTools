export default function reducer(state={
    output: null
}, action) {
    switch (action.type) {
        case "JSON_FORMAT": {
            return {
                ...state,
                output: action.payload.output,
            };
        }

        case "JSON_TO_ARRAY": {
            return {
                ...state,
                output: action.payload.output,
            };
        }
    }

    return state;
}