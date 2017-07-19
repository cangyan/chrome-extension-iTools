export default function reducer(state={
    hasNumeric: false,
    hasUppercase: false,
    hasLowercase: false,
    stringLength: 0,
    hasError: false,
    output: null
}, action) {
    switch (action.type) {
        case "INIT": {
            return {
                ...state,
                hasNumeric: false,
                hasUppercase: false,
                hasLowercase: false,
                stringLength: 0,
                hasError: false,
                output: null
            };
        }

        case "updateInput": {
            return {
                ...state,
                hasNumeric: action.payload.hasNumeric,
                hasUppercase: action.payload.hasUppercase,
                hasLowercase: action.payload.hasLowercase,
                stringLength: action.payload.stringLength
            };
        }

        case "CHECKBOX_NUMERIC_CHANGED": {
            return {
                ...state,
                hasNumeric: action.payload.hasNumeric
            }
        }

        case "CHECKBOX_LOWERCASE_CHANGED": {
            return {
                ...state,
                hasLowercase: action.payload.hasLowercase
            }
        }

        case "CHECKBOX_UPPERCASE_CHANGED": {
            return {
                ...state,
                hasUppercase: action.payload.hasUppercase
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
                stringLength: action.payload.stringLength,
                hasError: false,
                output: action.payload.output
            }
        }
    }

    return state;
}