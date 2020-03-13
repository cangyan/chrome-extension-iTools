import {Base64} from "js-base64";

export function decode(originString) {
    return {
        type: "SUCCESS",
        payload: {
            originString: originString,
            output: Base64.decode(originString)
        }
    }
}

export function encode(originString) {
    return {
        type: "SUCCESS",
        payload: {
            originString: originString,
            output: Base64.encodeURI(originString)
        }
    }
}
