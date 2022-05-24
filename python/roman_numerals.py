def to_roman(num):
    roman_nums = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I",
    }

    res = ""

    for i in roman_nums:
        res += roman_nums[i] * (num // i)
        num %= i

    return res







print(to_roman(1994))
