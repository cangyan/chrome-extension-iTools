export default function reducer(state={
    originString: null,
    hasError: false,
    dateFormat: null,
    output: null
}, action) {
    switch (action.type) {
        case "INIT": {
            return {
                ...state,
                hasError: false,
                originString: null,
                output: null
            }
        }

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
            
        case "DATE_FORMAT_CHANGE": {
            return {
                ...state,
                dateFormat: action.payload.dateFormat
            }
        }
    }

    return state;
}