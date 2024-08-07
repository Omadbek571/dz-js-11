// 1-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function func(arr) {
//     let counter = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             counter++
//         }
//     }

//     return counter
// }

// let natija = func(arr)
// console.log(natija);

// 2-savol

// let str = "salom123";
// let arr = str.split("")

// function func(arr) {
//     let res = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             res.push(arr[i])
//         }

//     }



//     return res
// }

// let natija = func(arr)
// console.log(natija);


// 3-savol

// let str = "salom nima gaplar bu"
// let arr = str.split(" ")

// function func(arr) {
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++) {
//         counter++
//     }

//     return counter
// }

// let natija = func(arr)
// console.log(natija);



// 4-savol

// let arr = ["sam", true, false, 12]

// function func(arr) {
//     let res = ""
//     for (let i = 0; i < arr.length; i++) {
//         let str = String(arr[i])
//         if (str.length > res.length) {
//             res = str
//         }
//     }

//     return res
// }

// let natija = func(arr)
// console.log(natija);

// 5-savol

// let str = "salom"

// function func(str) {
//     let newStr = ""

//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i]

//     }


//     return newStr
// }

// let natija = func(str)
// console.log(natija);


// 6-savol

// let str = "1234"
// let arr = str.split("")

// function func(arr) {
//     let res = 1;
//     for (let i = 0; i < arr.length; i++) {
//         res *= arr[i]

//     }

//     return res
// }

// let natija = func(arr)
// console.log(natija);

// 7-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function func(arr) {

//     let res = arr.sort(function (a, b) {
//         return b - a
//     })

//     return res
// }


// let natija = func(arr)
// console.log(natija);


// 8-savol

// let str = "salom nima gap salom"
// let deleteText = "salom"

// function func(str, deleteText) {
//     let res = str.split(deleteText).join("")

//     return res
// }

// let natija = func(str, deleteText)
// console.log(natija);

// 9-savol

// let arr = ["salom", "nima", "gap"]

// function func(arr) {
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
//     }
//     return newArr
// }




// let natija = func(arr)
// console.log(natija);

// 10-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function func(arr) {
//     let newArr = []

//     for (const element of arr) {
//         if (element % 2 == 1) {
//             newArr.push(element)
//         }
//     }

//     return newArr
// }

// let natija = func(arr)
// console.log(natija);


// 11-savol

// let arr = ["samsfs", "nima"]

// function func(arr) {

//     let newArr = ""


//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > newArr.length) {
//             newArr = arr[i]
//         }

//     }

//     return newArr

// }

// let natija = func(arr)
// console.log(natija);


// 12-savol

// let arr = [1, 2, 3, 4, 5, 6, true, false]

// function func(arr) {
//     let newArrNumber = []
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == "number") {
//             newArrNumber.push(arr[i])
//         }

//     }

//     let sum = 0
//     for (const element of newArrNumber) {
//         sum += element
//     }

//     return sum
// }

// let natija = func(arr)
// console.log(natija);



// 13-savol

// let arr = [1,2,3,4,5,-1,-2,-3]

// let res = arr.filter(function (value) {
//     return value < 0
// })

// console.log(res);


// 14-savol

// let arr = ["salom", true, 12]

// function func(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i].length)
//     }

//     return newArr
// }

// let natija = func(arr)
// console.log(natija);


// 15-savol

// let arr = [1,2,3,4,5]

// arr.forEach(function (value) {
//     let res = value * value

//     console.log(res);

// })


// 16-savol


// ???

// 17-savol

// let arr = [1,2,3,4,5,6]

// let res = arr.reverse()
// console.log(res);


// 18-savol

// let arr = ['banana', 'apple', 'cherry', 'date'];

// function func(arr) {
//     return arr.sort();
// }

// let natija = func(arr);
// console.log(natija); 

// 19-savol

// let str = "banana apple cherry date";
// let arr = str.split(" ")

// function func(arr) {
//     arr.sort()

//     return arr.join(" ")
// }

// console.log(func(arr));

// 20-savol

// let str = "banana apple cherry date";
// let arr = str.split(" ");

// function func(arr) {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
//     }

//     return newArr.join(" ")
// }

// console.log(func(arr));

// 21-savol

// let str = "Salom nima gaplar"
// let arr = str.split(" ")

// function func(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i])
        
//     }

//     return newArr.join("")
// }

// let natija = func(arr)
// console.log(natija);

// 22-savol

// let str = "banana apple cherry date";

// function func(input) {
//     let words = input.split(' ');
    
//     let reversedWords = words.map(word => word.split('').reverse().join(''));
    
//     return reversedWords.join(' ');
// }

// let result = func(str);
// console.log(result); 


// 23-savol

// let str = "banana apple cherry date";

// function getWordLengths(input) {
//     let words = input.split(' ');
    
//     let lengths = words.map(word => word.length);
    
//     return lengths;
// }

// let result = getWordLengths(str);
// console.log(result);

