let list = [
    10, 1, 14, 39, 3, 20, 15, 23, 75, 100
]

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

console.log(shuffle(list));

// let x = 0;

// function maxNumber(list) {
//     list.forEach(value => {
//         if (value > x) {
//             x = value;
//         }
//     })
//     return x
// }

// console.log(maxNumber(list));

// function LetterCapitalize(str) { 

//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

