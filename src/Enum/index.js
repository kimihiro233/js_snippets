const Enum = require('./enum.js')

let stackEnums = new Enum().add('ALL', '全部', null)
                          .add('SETTLE', '待落户', 0)
                          .add('SETTLED', '已落户', 1)
                          .add('CANCEL', '已取消', 2)

console.log(stackEnums)

for(let item in stackEnums) {
  if(stackEnums.hasOwnProperty(item))
  console.log(stackEnums[item].value, stackEnums[item].label)
}

const now = 0
console.log(stackEnums.ALL.value, now === stackEnums.SETTLE.value)
