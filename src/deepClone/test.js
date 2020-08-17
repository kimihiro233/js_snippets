import {clone} from './index.js'

const data = {
  name: 'a',
  car: {
    color: 'black'
  },
  books: ['book1']
}
const dataBak = clone(data)

console.log(data, dataBak)

dataBak.car.color = 'green'
dataBak.books.push('book2')

console.log(data, dataBak)
