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
const faker = require('faker');

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
