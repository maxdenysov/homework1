const faker = require('faker');
//import faker from 'faker';

const names = [];

let i = 0;

while (i < 100) {
    const randomName = faker.name.findName();

    if (randomName.charAt(0).toLowerCase() === 's') {
        names.push(randomName);
        i += 1;
    }
}
console.log(names);

//---This did not return array of 100 names.---

/*let faker = require('faker');

const names = [];

for (let i = 0; i < 100; i++) {
    const randomName = faker.name.findName();

    if (randomName.charAt(0).toLowerCase() === 's') {
        names.push(randomName);
    }
}
//const filteredArray = names.filter((item)=> item.charAt(0).toLowerCase() === 's')
//console.log(filteredArray);
*/
// let faker = require('faker');
//
// const names = [];
//
// var result = names.filter(function (startWith) {
//     return startWith.faker.name.findName();
//
// })
//
//
// console.log(result);

6:20 test A