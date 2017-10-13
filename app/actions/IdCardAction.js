import {IdCard} from './Class/IdCard';

export function decideIdCard(originString) {
    var outputString = null;

    var idCardString = originString.replace(/ /g, "");


    if (!(idCardString.length == 15 || idCardString.length == 18)) {
        return {
            type: "ERROR",
            payload: {
                originString: originString,
                output: "身份证长度不对"
            }
        }
    }

    try {
        let mIdCard = new IdCard(idCardString);
        if (mIdCard.checkIdCard()) {
            outputString =  idCardString + "是有效的身份证号码";
        } else {
            outputString =  idCardString + "不是有效的身份证号码";
            return {
                type: "ERROR",
                payload: {
                    originString: originString,
                    output: outputString
                }
            }
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