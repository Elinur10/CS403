const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];
// 1.Sum all the numbers in 'arr1'

1.// console.log(arr1.reduce((acc, prev) => acc + prev, 0 ));

// ////////////// TASK 7 //////////////
// const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", 'Gulshen', "Fuad", "Anar"]

// 2.Change Gulshen to Rovshen 
// 3.Console each name with map
// 4.Console only names which is Anar
// 5.Console all names where name is Anar, then change it to "Perviz"

2.// for(let i=0;i < arr2.length; i++){
//     arr2[i]=arr2[i].replaceAll('Gulshen', 'Rovshen')
// }
// console.log(arr2);

3.// for(item of arr2){
//     console.log(item);
// }

3.// for (let i = 0; i < arr2.length; i++) {
//     arr2[i]  
// }
//  console.log(arr2);

4.// for (let i = 0; i < arr2.length; i++) {
//  if (arr2[i] === 'Anar'){
//     console.log(arr2[i]);
//  }  
// }

5.// for(let i =0; i< arr2.length; i++){
//     if (arr2[i]==='Anar'){
//         arr2[i]='Perviz'
//     }
// }
// console.log(arr2);

////////////// TASK 8 //////////////
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]

// 1.Show only numbers
// 2.Show only true values
// 3.Show only false values
// 4.Show only strings

1.// for (let i = 0; i < arr3.length; i++) {
//     if (typeof arr3[i] === 'number'){
//     console.log(arr3[i]);
//     }
// }

1.// for (const item of arr3) {
//     if( typeof item === 'number' ){
//     console.log(item);
//     }
// }

2.// for(let i = 0; i < arr3.length; i++){
//     if(arr3[i]){
//        console.log(arr3[i]);
//     }
// }
 
3.// for (const item of arr3) {
//     if (!item){
//         console.log(item);
//     }
// }

4.// for (let i = 0; i < arr3.length; i++){
//     if (typeof arr3[i] === 'string'){
//         console.log(arr3[i]);
//     }
// }

////////////// TASK 8 //////////////
const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]

// 1.Console (only even numbers)
// 2.Console (only odd numbers)

1.// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }

2.// for(const item of numbers){
//     if ( item % 2 === 1){
//         console.log(item);
//     }
// }

////////////// TASK 9 //////////////
const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)
// 2.Sum all numbers of arr4
// 3.Count only the values that are true
// 4.Count only the values that are string
// 5.Count only the values that are false

1.// for(let i =0; i <  arr4.length; i++){
//     if (typeof arr4[i] === 'number'){
//         console.log(arr4[i] + 10);
//     }else if (typeof arr4[i] === 'string'){
//         console.log(arr4[i] + ' ' +  "is string");
//     }else if (!arr4[i]){
//         console.log(arr4[i] + ' ' + 'is falsy value');
//     }
// }

2.// const new_Arr= []
// for(let i = 0; i < arr4.length; i++){
//     if(typeof arr4[i] === 'number'){
//         new_Arr.push(arr4[i])
//         console.log(arr4[i])
        
//     }
// }
// console.log(new_Arr.reduce((acc,prev) => acc + prev , 0));

3.// const new_Arr = []
// for(item of arr4){
//     if(item){
//         new_Arr.push(item)
//     }
// }
// console.log(new_Arr.length);

4.// const new_Arr = []
// for( let i = 0; i < arr4.length; i++){
//     if (typeof arr4[i] === 'string'){
//         new_Arr.push(arr4[i])
//     }
// }
// console.log(new_Arr.length);

5.// const new_Arr = []
// for( let i = 0; i < arr4.length; i++){
//     if(!arr4[i]){
//         new_Arr.push(arr4[i])
//     }
// }
// console.log(new_Arr.length);

////////////// TASK 11 //////////////

let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
//6) arrayda tekrar olunan reqemleri artan sira ile duzun
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
//10) arraydaki en boyuk reqemin ilk indexini tapin
//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
//14) 7 reqeminin indexleri cemini tapin.


4.// function getValue() {
//     const new_Arr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === 5){
//             new_Arr.push(arr[i])
//         }
//     }
//     return new_Arr.length
// }
// console.log(getValue(arr));

5.// function getValue() {
//     return arr.reduce((acc,prev)=> acc + prev, 0)
// }
// console.log(getValue(arr));

6.// function getValue(){
//     return [...new Set(arr)].sort((a,b) => (a -b))
// }
// console.log(getValue(arr));

7.// function getValue(){
//     const new_Arr = []
//    for(let i=0; i< arr.length; i++){
//     if(arr[i]=== Math.max(...arr)){
//        new_Arr.push(arr[i])
//     }
//    }
//    return new_Arr.length
// }
// console.log(getValue(arr));

8.// function getValue(){
//     let name = 'Elnur'
//     return arr.includes(name.length)
// }
// console.log(getValue(arr));

9.// function getValue() {
//     const new_Arr = []
//     for(let i=0; i< arr.length;i++){
//         if(arr[i] % 3 === 2){
//             new_Arr.push(arr[i])
//         }
//     }
//     return arr.indexOf(new_Arr[0])
// }
// console.log(getValue(arr));

10.// function  getValue (){
//     for(let i = 0; i< arr.length; i++){
//       if (arr[i] === Math.max(...arr)){
//          return arr.indexOf(arr[i])
//       }
//     }
 
// }
// console.log(getValue(arr));

11.// function getValue (){
//     const new_Arr = []
//     for(let i = 0; i< arr.length; i++){
//         if (arr[i] === 4){
//             new_Arr.push(i)
//         }
//     }
//     return new_Arr
// }
// console.log(getValue(arr));

12.// function getValue (){
//     const new_Arr =[]
//     for(let i=0; i < arr.length; i++){
//         if(arr[i]===5){
//             new_Arr.push(i)

//         }
//     }
//     return new_Arr.sort((a,b)=> b-a )[0]
   
// }
// console.log(getValue(arr));  //en boyuk index 

12.// function getValue (){
//     const new_Arr =[]
//     for(let i=0; i < arr.length; i++){
//         if(arr[i]===5){
//             new_Arr.push(i)

//         }
//     }
//     return new_Arr.sort((a,b)=> a-b )[0]
   
// }
// console.log(getValue(arr));  //en kicik index

13.// function getValue (){
//     const new_Arr = []
//     for(let i = 0; i< arr.length; i++){
//      if (arr[i] > 2){
//         new_Arr.push(arr[i])
//      }
//     }
//     return (new_Arr.length - arr.length)
// }
// console.log(getValue(arr));

14.// function getValue (){
//     const new_Arr = []
//     for(let i= 0; i < arr.length; i++){
//         if(arr[i]===7)
//             new_Arr.push(i)
//     }
//     return new_Arr.reduce((acc,prev) => acc + prev , 0)
// }
// console.log(getValue(arr));

///////////// TASK 12//////////////
let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.

16.// const getValue = () => {
//     const new_Arr = []
//     for(let i = 0; i < arr2.length; i++){
//         if (arr2[i].name.startsWith('t')){
//           new_Arr.push(arr2[i])
//         }
//     }
//     return new_Arr
// }
// console.log(getValue(arr2));

17.// const getValue = () => {
//     const new_Arr = []
//     for(let i = 0; i < arr2.length; i++){
//         if (arr2[i].name.startsWith('t') && arr2[i].name.endsWith('t')){
//           new_Arr.push(arr2[i])
//         }
//     }
//     return new_Arr.length
// }
// console.log(getValue(arr2));

18.// const getValue = () => {
//     const new_Arr = []
//     for(let i = 0; i < arr2.length; i++){
//         if (arr2[i].name.startsWith('t') && arr2[i].name.endsWith('t')){
//           new_Arr.push(arr2[i].key)
//         }
//     }
//     return new_Arr.reduce((acc,prev)=> acc + prev, 0 )
// }
// console.log(getValue(arr2));

19.// const getValue = () => {
//     for(let i = 0; i < arr2.length; i++){
//         if (arr2[i].name.endsWith('e')){
//              arr2[i].name = "SuperDev"        
//         }
//     }
//      return arr2
// }
// console.log(getValue(arr2));

20.// const getValue = () => {
//     const new_Arr = []
//    for ( let i = 0; i < arr2.length; i++){
//       if(arr2[i].name.length){
//          new_Arr.push(arr2[i].name.length)
//       }
//        }
//        for(let i  = 0; i < arr2.length; i++){
//         if(arr2[i].name.length === (new_Arr.sort((a,b) => b - a)[0]) ){
//              return arr2[i].key
//         }
//        }
//    }
// console.log(getValue(arr2));

21.// const getValue = () => {
//     const new_Arr = []
//    for ( let i = 0; i < arr2.length; i++){
//       if(arr2[i].name.length){
//          new_Arr.push(arr2[i].name.length)
//       }
//        }
//        for(let i  = 0; i < arr2.length; i++){
//         if(arr2[i].name.length === (new_Arr.sort((a,b) => b - a)[0]) ){
//              return i ** 2
//         }
//        }
//    }
// console.log(getValue(arr2));

22.// const getValue = () => {
//     const new_Arr = []
//     for(let i= 0; i < arr2.length; i++){
//         if (arr2[i].name.length === 4)
//             new_Arr.push(arr2[i])
//     }
//     return new_Arr
// }
// console.log(getValue(arr2));

23.// const getValue = () => {
//     const new_Arr = []
//    for ( let i = 0; i < arr2.length; i++){
//       if(arr2[i].key){
//          new_Arr.push(arr2[i].key)
//       }
//        }
//        for(let i  = 0; i < arr2.length; i++){
//         if(arr2[i].key === (new_Arr.sort((a,b) => b - a)[0]) ){
//              return arr2[i].name
//         }
//        }
//    }
// console.log(getValue(arr2));

24.// const getValue = () => {
//     const new_Arr = []
//     for(let i = 0; i < arr2.length; i++ ){
//      if(arr2[i].name.split('l').length-1 === 2){
//         new_Arr.push(i)
//      }
//     }
//     return new_Arr
// }
// console.log(getValue(arr2));

25.// const getValue = () => {
//     const new_Arr = []
//     for(let i = 0; i < arr2.length; i++ ){
//      if(arr2[i].name.split('t').length-1 === 2){
//         new_Arr.push(arr2[i].key)
//      }
//     }
//     return new_Arr
// }
// console.log(getValue(arr2));



