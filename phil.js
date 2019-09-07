const faker = require('faker');

const names = [];

let numberOfNames = 100

while (numberOfNames--) {
  names.push(faker.name.findName())
}

const filteredNames = names.filter( name => {

  /* The startsWidth method works well
     filter, as it returns a boolean
   */
  return name.startsWith('S')
})

console.log(filteredNames)
