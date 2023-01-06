module.exports = function toReadable(number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'];
    let strOfNumber = number.toString()

    if (number < 0) return 'negative number'
    if (strOfNumber.length > 3) return 'big number'
    if (number === 0) return 'zero';
    if (number < 20) return units[number]
    if (strOfNumber.length === 2) {
        if (number % 10 === 0) {
            return tens[(number / 10)]
        } else {
            return `${tens[strOfNumber[0]]} ${units[strOfNumber[1]]}`
        }
    }

    if (strOfNumber.length === 3) {
        if (strOfNumber[1] === '0' && strOfNumber[2] === '0') {
            return `${units[strOfNumber[0]]} hundred`
        } else if (strOfNumber[1] === '0') {
            return `${units[strOfNumber[0]]} hundred ${units[strOfNumber[2]]}`
        } else if (strOfNumber[1] === '1') {
            return `${units[strOfNumber[0]]} hundred ${units[strOfNumber[1] + strOfNumber[2]]}`
        } else if (strOfNumber[2] === '0') {
            return `${units[strOfNumber[0]]} hundred ${tens[strOfNumber[1]]}`
        } else {
            return `${units[strOfNumber[0]]} hundred ${tens[strOfNumber[1]]} ${units[strOfNumber[2]]}`
        }
    }

}
