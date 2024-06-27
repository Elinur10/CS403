// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];

// 1.Sum all the numbers in 'arr1'
// 2.Add two numbers (10,88) to end of arr1 (push methods)
// 3.Remove first two numbers from arr1
// 4.Add three numbers (0,9,11) in front of arr1(unshift)
// 5.Remove four numbers in front of arr1(shift)

1.// let sum = 0
// arr1.filter((item) => sum += item)
// console.log(sum);

2.// arr1.push(10,88)
// console.log(arr1);

3.// arr1.shift()
// arr1.shift()
// console.log(arr1);

4.// arr1.unshift(0,9,11)
// console.log(arr1);

5.// arr1.shift()
// arr1.shift()
// arr1.shift()
// arr1.shift()
// console.log(arr1);


// ////////////// TASK 7 //////////////
// const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", 'Gulshen', "Fuad", "Anar"]

// 1.Console values from "Rufet" to "Fuad"
// 2.Change Gulshen to Rovshen 
// 3.Console each name with map
// 4.Console only names which is Anar
// 5.Console all names where name is Anar, then change it to "Perviz"
// 6.Console last second value of arr2
// 7.Console length of arr2

1.// console.log(arr2.slice(2,9));

2.// console.log(arr2.map(item => item.replaceAll('Gulshen', 'Rovshen')));

3.// console.log(arr2.map(item => item ));
 
4.// console.log(arr2.filter(item => item === "Anar"));

5.// console.log(arr2.map(item => item.replaceAll('Anar', 'Perviz')));

6.// console.log(arr2[arr2.length -2]);

7.// console.log(arr2.length);

////////////// TASK 8 //////////////
// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]

// 1.Show only numbers
// 2.Show only true values
// 3.Show only false values
// 4.Show only strings

1.// console.log(arr3.filter(item => typeof item === 'number'));

2.// console.log(arr3.filter(item => item ));

3.// console.log(arr3.filter(item => !item ));

4.// console.log(arr3.filter(item => typeof item === 'string' ));

////////////// TASK 8 //////////////
// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]

// 1.Console (only even numbers)
// 2.Console (only odd numbers)

// console.log(numbers.filter(number => number % 2 === 0 ));

// console.log(numbers.filter(number => number % 2 === 1 ));

////////////// TASK 9 //////////////
// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)

// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]

// 2.Sum all numbers of arr4
// 3.Count only the values that are true
// 4.Count only the values that are string
// 5.Count only the values that are false

1.// console.log(arr4.map( item => {
//     if (typeof item === "number"){
//         return item + 10
//     } else if ( typeof item === "string" ){
//         return item + ' is string'
//     } else if (!item) {
//         return item  + ' is falsy value'
//     }else{
//         return item
//     }
// }));

2.// let sum = 0
// arr4.filter(item => typeof item === 'number').map(item => sum += item)
// console.log(sum);

3.// console.log(arr4.filter(item => item).length);

4.// console.log(arr4.filter(item => typeof item === 'string').length);

5.// console.log(arr4.filter(item => !item).length);

////////////// TASK 10 //////////////
// 1.Create a object add your name, surname, age and city.
// 2.Then change name to "Jhon"

1.// const obj1 = {
//     name: "Elnur",
//     surname: "Khalilov",
//     age: 19,
//     city: "Baku"
// }

2.// obj1.name = "Jhon"
// console.log(obj1);

const obj = {
    email: 'ulfat@gmail.com',
    info: {
        gender: 'Male',
        loc: {
            city: "Baku",
            street: 'Nizami 22',
            education: {
                "uni name": "ADNSU",
            }
        }
    }
}

// 3.Console gender
// 4.Console city

3.// console.log(obj.info.gender);
4.// console.log(obj.info.loc.city);

////////////// TASK 11 //////////////

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
// 3) Alinan yeni arrayi stringe cevirin(join)

1.// let fullName = 'Elnur Khalilov Kamil'
// console.log(fullName.split(''));

2.// const new_Arr = fullName.split(' ').map((item,index) => {
//     if (index===0){
//         return 'Khalilov'
//     }else if (index===1){
//             return 'Elnur'
//         } else {
//             return item
//         }
// });

// console.log(new_Arr);

3.// console.log(new_Arr.join(' '));


// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]


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

4.// console.log(arr.filter(item => item === 5).length);

5.// let sum = 0 
// arr.map(item => sum+= item)
// console.log(sum);

6.// console.log([...new Set(arr)].sort((a,b) => (a-b)));


7.// console.log(arr.filter(item => item == Math.max(...arr)).length);

8.// let user = 'Elnur'
// console.log(user.length);
// console.log(arr.includes(user.length));

9.// const first_arr = arr.filter(item => item % 3 == 2)
// const second_arr = first_arr[0]
// console.log(arr.indexOf(second_arr));

10.// const first_arr = [...arr].sort((a,b)=> b-a )
// const second_arr = first_arr[0]
// console.log(arr.indexOf(second_arr));

11.// console.log(arr.map((item, index) => {
//     if (item == 4){
//         return index
//     }else { 
//         return 'false'
//     }
// }).filter(item => item !== 'false'));

12.// console.log(arr.map((item, index) => {
//     if (item == 5){
//         return index
//     }else { 
//         return 'false'
//     }
// }).filter((item, index) => item !== 'false').sort((a,b) => b - a).filter((item, index) => index == 0)); //en boyuk

12.// console.log(arr.map((item, index) => {
//     if (item == 5){
//         return index
//     }else { 
//         return 'false'
//     }
// }).filter((item, index) => item !== 'false').sort((a,b) => b - a).reverse().filter((item, index) => index == 0)); //en kicik

13.// const new_Arr = arr.filter(item => item > 2)
// console.log(new_Arr.length - arr.length);

14.// let a = 0
// arr.map((item, index) => {
//     if (item == 7){
//         return index
//     }else { 
//         return 'false'
//     }
// }).filter((item, index) => item !== 'false').map(item => a += item);
// console.log(a);


///////////// TASK 12//////////////

// let arr2 = [
//     {
//         name: 'test',
//         key: 1
//     },
//     {
//         name: 'task',
//         key: 2
//     },
//     {
//         name: 'tanqo',
//         key: 3
//     },
//     {
//         name: 'like',
//         key: 4
//     },
//     {
//         name: 'task',
//         key: 5
//     },
//     {
//         name: 'trust',
//         key: 6
//     },
//     {
//         name: 'test',
//         key: 7
//     },
//     {
//         name: 'last',
//         key: 8
//     },
//     {
//         name: 'tanqo',
//         key: 9
//     },
//     {
//         name: 'elephant',
//         key: 10
//     },
//     {
//         name: 'love',
//         key: 11
//     },
//     {
//         name: 'small',
//         key: 12
//     },
//     {
//         name: 'little',
//         key: 13
//     },
// ]

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

16.// console.log(arr2.map(item => item.name).filter(item => item.startsWith('t')));

17.// console.log(arr2.map(item => item.name).filter(item => (item.startsWith('t') && item.endsWith('t'))).length);
// console.log(arr2.map(item => item.name).filter(item => {
//     if(item.startsWith('t') && item.endsWith('t')) {
//         return item
//     }else {
//         return null
//     }
// }).length);

// const first_arr = arr2.map(item => item.name).filter(item => (item.startsWith('t') && item.endsWith('t')))
// console.log(arr2.indexOf(first_arr));

18.// let sum = 0 
// arr2.filter(item => item.name.startsWith('t') && item.name.endsWith('t')).map(item => sum += item.key)
// console.log(sum);

19.// console.log(arr2.map(item => item.name).map(item => {
//     if (item.endsWith('e')) {
//         return "SuperDev" 
//     }else{
//         return item
//     }}));

20.// let nameLengths = arr2.map(item => item.name.length);
// let maxLength = Math.max(...nameLengths);
// let longestNameObject = arr2.find(item => item.name.length === maxLength);
// let longestNameKey = longestNameObject.key;
// console.log(longestNameKey);

21.// let nameLengths = arr2.map(item => item.name.length);
// let maxLength = Math.max(...nameLengths);
// let longestNameObject = arr2.find(item => item.name.length === maxLength);
// let longestNameObjectIndex = arr2.indexOf(arr2.find(item => item.name.length === maxLength))
// console.log(Math.pow(longestNameObjectIndex,2))

22.// console.log(arr2.filter(item => item.name.length === 4))

23.// let Key = arr2.map(item => item.key);
// let maxKey = Math.max(...Key)
// let maxKeyObject = arr2.find(item => item.key === maxKey)
// let maxKeyObjectName = maxKey_object.name
// console.log(maxKey_object_Name);

24.// console.log(arr2.map((item,index) =>  {
//     if ( item.name.split('l').length - 1 === 2) {
//         return index
//     } else {
//         return null 
//     }
// }).filter(item => item ));


25.// let result = arr2.filter((item) => item.name.split('t').length - 1 === 2).map(item => item.key)
// console.log(result);


