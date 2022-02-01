// let sandwiches = 88
// let result = ''

// if (sandwiches == 1) {
//     result = 'you have 1 sandwich'
// } else {
//     result = 'you have more than one sandwich'
// }

// console.log(result)

// let mark = 74.4
// let result = ''

// if (mark >= 90) {
//     result = 'excellent'
// } else if (mark >= 80) {
//     result = 'very good'
// } else if (mark >= 70) {
//     result = 'good'
// } else if (mark >= 60) {
//     result = 'fair'
// } else {
//     result = 'failed'
// }

// console.log(result)


let mark = "hghf"
let result = ''

if (typeof(mark) == 'number') {
    if (mark <= 60) {
        result = 'failed'
    } else if (mark <= 70) {
        result = 'fair'
    } else if (mark <= 80) {
        result = 'good'
    } else if (mark < 90) {
        result = 'very good'
    } else {
        result = 'excellent'
    }
} else {
    result = 'please enter a valid number'
}


console.log(result)