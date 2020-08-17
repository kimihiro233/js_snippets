const calculator = (num) => {
  let result = num + 1
  // console.log(result)
  result = result * 2
  // console.log(result)
  result = result +4
  // console.log(result)
  result = result / 2
  // console.log(result, result - num)
  result = result + 517
  // console.log(result)
  result = result - num
  // console.log(result)
  return result
}

new Array(9).fill('').forEach((x, index) => {
  const num = index + 1
  console.log(num, calculator(num))
})
