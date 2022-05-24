exports.toRoman = function(num) {
    


    const numerals = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    const integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = '';

    while (num !== 0) {
        for (let i = 0; i < numerals.length; i++) {
            if (num >= integers[i]) {
                result += numerals[i];
                num -= integers[i];
                break;
            }
        }
    }
    return result;
};

