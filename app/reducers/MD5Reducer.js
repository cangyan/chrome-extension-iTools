export default function reducer(state={
    originString: null,
    hasError: false,
    output: null
}, action) {
    switch (action.type) {
        case "ERROR": {
            return {
                ...state,
                hasError: true,
                originString: action.payload.originString,
                output: action.payload.output
            }
        }

        case "SUCCESS": {
            return {
                ...state,
                hasError: false,
                originString: action.payload.originString,
                output: action.payload.output
            }
        }
    }

    return state;
}