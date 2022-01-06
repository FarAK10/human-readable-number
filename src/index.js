module.exports = function toReadable(number) {
    var str = number.toString();
    var result = "";
    var dict = [];
    var dic_num = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    var dic_el = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        15: "fifteen",
        18: "eighteen",
    };
    var dic_dec = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    var num = Math.floor(number / 100);
    var rem = number % 100;
    // hundreds
    if (number != 0) {
        if (num != 0) {
            result = dic_num[num] + " hundred";
            dict.push(result);
        }
        // decimal
        if (
            rem == 10 ||
            rem == 11 ||
            rem == 12 ||
            rem == 13 ||
            rem == 15 ||
            rem == 18
        ) {
            result = dic_el[rem];
            dict.push(result);
        } else {
            num = rem % 10;
            rem = Math.floor(rem / 10);
            if (rem == 1) {
                result = dic_num[num] + "teen";
                dict.push(result);
            } else if (rem != 0) {
                result = dic_dec[rem];
                dict.push(result);
                if (num == 0) {
                    return dict.join(" ");
                }
                result = dic_num[num];
                dict.push(result);
            } else {
                if (num == 0) {
                    return dict.join(" ");
                }
                result = dic_num[num];
                dict.push(result);
            }
        }
        return dict.join(" ");
    }
    return "zero";
};
