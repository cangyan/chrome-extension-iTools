export function createRandomString(hasNumeric, hasUppercase, hasLowercase, length) {
    var str = "";
    var possible = "";

    if (length.length == 0) {
        return  {
            type: "ERROR",
            payload: {
                output: '长度不能为空'
            }
        }
    }

    if (!/^[0-9]*$/.test(length)) {
        return  {
            type: "ERROR",
            payload: {
                output: '请输入整数'
            }
        }
    }

    if (length.length > 1000) {
        return  {
            type: "ERROR",
            payload: {
                output: '长度不能超过1000'
            }
        }
    }

    if (hasNumeric) {
        possible += "0123456789";
    }

    if (hasUppercase) {
        possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (hasLowercase) {
        possible += "abcdefghijklmnopqrstuvwxyz";
    }

    if (possible.length == 0) {
        return  {
            type: "ERROR",
            payload: {
                output: '数字,大写字母,小写字母至少勾选一个'
            }
        }
    }

    for (var i = 0; i < length; i++) {
        str += possible.charAt(Math.floor(Math.random() * possible.length));
    }


    return {
        type: "SUCCESS",
        payload: {
            stringLength: length,
            output: str
        }
    }
}