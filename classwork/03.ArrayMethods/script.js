// let user = 'ulfat'
//  console.log(user.toUpperCase().slice(0,1) + user.slice(1,6));
//  console.log(user.replace('u', 'U'));

// let user2  = 'ulfat zakirli'
// console.log(user2.toUpperCase().slice(0, 1)+ user2.slice(1,6) + user2.toUpperCase().slice(6,7) + user2.slice(7, 13));
// console.log(user2.slice(0,6).replace('u', 'U') + user2.slice(6).replace('z', 'Z'));
// console.log(user2.slice(0,13));


// const students = [
//     {
//         name: 'Elnur',
//     age: 19,
//     gender: 'Male',
//     },
//     {
//         name: 'Ruslan',
//     age: 24,
//     gender: 'Male',
//     },
//     {
//         name: 'Leyla',
//     age: 21,
//     gender: 'Female',
//     },
//     {
//         name: 'Lale',
//     age: 28,
//     gender: 'Female',
//     },
//     {
//         name: 'Rovshen',
//     age: 27,
//     gender: 'Male',
//     },
// ]

// console.log(students.map((student) => student.age));
// console.log(students.map((student) => student.gender));
// console.log(students.map((student) => student.name));
// console.log(students.filter((student) => student.age >= 20));
// console.log(students.filter((student) => student.gender === "Female"));
// console.log(students.filter((student) => student.name.startsWith('R') ));
// console.log(students.filter((student) => student.name.includes('a') ));
// console.log(students.filter((student) => student.age = student.age % 2 == 0 ));
// console.log(students.filter((student) => student.age = student.age % 2 == 1 ));
// console.log(students.map((student, index) => index));
// console.log(students.filter((student, index) => index % 2 == 0));
// let a = 0
// console.log(students.map((student) => a += student.age));
// console.log(a);
// let sum = 0
// students.map((_, index)  => sum += index)
// console.log(sum);
// let b=1
// console.log(students.filter((student) => student.gender == 'Female').map((item) => b *= item.age));
// console.log(b);