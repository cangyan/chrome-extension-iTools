export class IdCard {

    constructor(idCardString) {
        this.idCard = idCardString;
        this.Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];
        this.ValideCode = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];
    }
    
    checkIdCard() {
        if (this.idCard.length == 15) {
            return this.isValidityBrithBy15IdCard();
        }

        if (this.idCard.length == 18) {
            return this.isValidityBrithBy18IdCard() && this.isTrueValidateCodeBy18IdCard();
        }

        return "未知异常";
    }

    isValidityBrithBy15IdCard() {
        var year = this.idCard.substring(6, 8);
        var month = this.idCard.substring(8, 10);
        var day = this.idCard.substring(10, 12);
        var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
        return !(temp_date.getYear() != parseFloat(year)
            || temp_date.getMonth() != parseFloat(month) - 1
            || temp_date.getDate() != parseFloat(day));
    }

    isValidityBrithBy18IdCard() {
        var year =  this.idCard.substring(6,10);
        var month = this.idCard.substring(10,12);
        var day = this.idCard.substring(12,14);
        var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));
        return !(temp_date.getFullYear()!=parseFloat(year)
            ||temp_date.getMonth()!=parseFloat(month)-1
            ||temp_date.getDate()!=parseFloat(day));
    }

    isTrueValidateCodeBy18IdCard() {
        var a_idCard = this.idCard.split("");
        var sum = 0;
        if (a_idCard[17].toLowerCase() == 'x') {
            a_idCard[17] = 10;
        }
        for (var i = 0; i < 17; i++) {
            sum += this.Wi[i] * a_idCard[i];
        }
        var valCodePosition = sum % 11;
        return (a_idCard[17] == this.ValideCode[valCodePosition]);
    }
}