function sum (num1: number, num2: number) {
    return num1+num2
}
function sumArray (numArray: number[]) {
    return numArray.reduce((total, num) => total + num, 0)
}

export { sum, sumArray }
