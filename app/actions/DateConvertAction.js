import dateFormat from "dateformat"

export function conventTimestampToDateTimeString(timestamp, format) {
    var mDate = new Date(Number(timestamp));
    return {
        type: "SUCCESS",
        payload: {
            output: dateFormat(mDate, format)
        }
    }
}

export function conventDateTimeStringToTimestamp(dateTimeString) {
    var mDate = new Date(dateTimeString);
    return {
        type: "SUCCESS",
        payload: {
            output: mDate.getTime()
        }
    }
}


export function conventDateToString(date, format) {
    return {
        type: "SUCCESS",
        payload: {
            output: dateFormat(date, format)
        }
    }
}

export function conventDateToTimestamp(date) {
    return {
        type: "SUCCESS",
        payload: {
            output: dateFormat(date, 'yyyy-mm-dd HH:MM:ss.l') + ' => ' + date.getTime()
        }
    }
}