export default function reducer(state={
    hasNumeric: true,
    hasUppercase: false,
    hasLowercase: false,
    stringLength: 0,
    output: null
}, action) {
    switch (action.type) {
        case "updateInput": {
            return {
                ...state,
                hasNumeric: action.payload.hasNumeric,
                hasUppercase: action.payload.hasUppercase,
                hasLowercase: action.payload.hasLowercase,
                stringLength: action.payload.stringLength
            };
        }

        case "createString": {
            return {
                ...state,
                output: action.payload.output
            }
        }
    }

    return state;
}