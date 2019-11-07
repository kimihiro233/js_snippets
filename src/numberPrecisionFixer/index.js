const fixPrecision = (num, di) => {
  let pointIndex = Math.max(di || 0, getDotIndex(num))
  if (num < 0) {
    pointIndex--
  }
  let ans = (+num).toFixed(15 - pointIndex) // 根据整数长度部分，动态调整精度
  return parseFloat(ans)
}

const getDotIndex = (num) => {
  return ("" + num).indexOf(".")
}

const getMaxDI = (a, b) => {
  return Math.max(getDotIndex(a), getDotIndex(b))
}

const num = fixPrecision(0.01+0.02, 2)

console.log(0.01+0.02, num)

export {fixPrecision, getMaxDI}
