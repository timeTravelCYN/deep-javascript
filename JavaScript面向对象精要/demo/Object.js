var person = {
  name: 'chenyn'
}

Object.defineProperty(person, 'name', {
  enumerable: false
})

console.log('name' in person)
console.log(person.popertyIsEnumerable('name'))

var properties = Object.keys(person)

console.log(properties.length)

Object.defineProperty(person, 'name', {
  configurable: false
})

delete person.name

console.log('name' in person)

Object.defineProperty(person, 'name', {
  configurable: true
}) // error 无法将一个不可配置的属性编程可配置

var person1 = {
  _name: 'chenyn'
}

Object.defineProperty(person1, 'name', {
  get: function () {
    console.log('Reading me...')
    return this._name
  },
  set: function () {
    console.log('Setting name to %s', value)
    this._name = value
  },
  enumerable: true,
  configurable: true
})