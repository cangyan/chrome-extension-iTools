import qrCode from "qrcode-npm";

export function createQRCode(originString) {
    var outputString = null;
    try {
        var qr = qrCode.qrcode(5, 'M');
        qr.addData(originString);
        qr.make();
        outputString = qr.createImgTag(5);
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