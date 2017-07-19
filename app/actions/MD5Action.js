import md5 from "js-md5";

export function createString(originString) {
    var outputString = null;
    try {
        outputString = md5(originString);
    } catch (e) {
        return {
            type: "ERROR",
            payload: {
                originString: originString,
                output: e
            }
        }
    }
    
    return {
        type: "SUCCESS",
        payload: {
            originString: originString,
            output: outputString
        }
    }
}