export function stringURLDecode(originString) {
    var outputString = null;
    try {
        outputString = decodeURIComponent(originString);
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

export function calcStringLength(originString) {
    return {
        type: "SUCCESS",
        payload: {
            originString: originString,
            output: originString.length
        }
    }
}

export function calcStringLengthWithChinese(originString) {
    var outputString = 0;
    try {
        for (var i = 0; i< originString.length; i++) {
            if ((originString.charCodeAt(i) & 0xff00) != 0) {
                outputString++;
            }
    
            outputString++;
        }
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