const faker = require('faker');

const fakePeople = [];

let numberOfNames = 100

// Creating objects...
while (numberOfNames--) {
  let obj = {}
  obj.firstName = faker.name.firstName()
  obj.lastName = faker.name.lastName()
  obj.email = faker.internet.email()
  obj.phone = faker.phone.phoneNumber()
  fakePeople.push(obj)
}

const filteredNames = fakePeople
  .filter( name => name.firstName.startsWith('A'))
    .map(person => person.firstName)

console.log(filteredNames)
