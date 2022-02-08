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


// let mark = "hghf"
// let result = ''

// if (typeof(mark) == 'number') {
//     if (mark <= 60) {
//         result = 'failed'
//     } else if (mark <= 70) {
//         result = 'fair'
//     } else if (mark <= 80) {
//         result = 'good'
//     } else if (mark < 90) {
//         result = 'very good'
//     } else {
//         result = 'excellent'
//     }
// } else {
//     result = 'please enter a valid number'
// }

// console.log(result)

// const str = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veritatis vel. Eius ad laudantium eaque nisi perferendis recusandae, odit pariatur optio maxime vel tempore placeat, delectus distinctio ipsam labore ducimus.'

// for (i = 0; str[i] != undefined; i++) {
//     console.log(str[i]);
// }

// undefined //falsy
// null //falsy
// Nan //falsy
// 0 //falsy
// '0' //truthy


// const str = 'Lorem  ipsum dolor sit amet consectetur adipisicing elit. Sint, sunt maiores. Officiis doloremque vel nisi, error ipsa, eligendi ab fugiat animi corrupti impedit accusantium iste quasi voluptate? Quasi, voluptates mollitia.'

// for (let i = 0; str[i]; i++) {
//     if (str.charCodeAt(i) == '32') {
//         console.log(str[i]);
//     }
// }


const str = 'Lorem  iPsum dolOr sit amEt consectetur adipisicing elit. Sint, sunt maiores. Officiis doloremque vel nisi, error ipsa, eligendi ab fugiat animi corrupti impedit accusantium iste quasi voluptate? Quasi, voluptates mollitia.'
let counter = 0
for (let i = 0; str[i]; i++) {
    if (str.charCodeAt(i) <= '90' && str.charCodeAt(i) >= '65') {
        counter++
    }
}
console.log(counter);