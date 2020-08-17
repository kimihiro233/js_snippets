const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z']

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


chars.forEach(char => {
  numbers.forEach(num => {
    console.log(`\`${char}${num}\` DOUBLE DEFAULT 0 COMMENT '',`)
  })
})
