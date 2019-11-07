function floatFix (num, n = 2, afterStr = null, round = true, forceFix = false) { //
  if (!Number.isNaN(num)) {
    num = Number(num)
    let fix = '1'
    for (let i = 0; i < n; i++) {
      fix += '0'
    }
    fix = Number(fix) // 以上根据n循环出因数并转成数字
    if (round) {
      num = Math.round(num * fix) / fix
    } else {
      // let float=parseFloat(num).toFixed(n+1) //此方法对于999.999类似无法精确
      let float = parseFloat(num).toString()
      if (float.indexOf('.') !== -1) { // 判断是否有小数点
        num = Number(float.substring(0, float.indexOf('.') + n + 1))
      } else {
        num = Number(float)
      }
      // num = parseInt(num * 10000/10000*fix) / fix; //此方法有弱精度问题，如4.56
    }
  }
  if (forceFix) {
    num = num.toString()
    let numArr = num.split('.')
    if (numArr.length > 1) {
      let arrS = numArr[1].toString()
      for (let i = 0; i < (n - arrS.length); i++) {
        num += '0'
      }
    } else {
      num += '.'
      for (let i = 0; i < n; i++) {
        num += '0'
      }
    }
    // num=Number(num)
  }
  
  // return (Math.floor(num*fix)/fix).toFixed(n);
  // *因数，舍小数，除因数，不足位补0
  if (!Number.isNaN(num)) {
    return afterStr ? num + afterStr : num
  } else return '--'
}

const lngLatToTime = (data) => { // 经纬度转换为时间
  if (!Number.isNaN(data)) {
    let arr = new Array(3)
    arr[0] = parseInt(data)
    // arr[1]=lib.floatFix((data-arr[0])*60,0);
    // arr[2]=lib.floatFix( ((data-arr[0])*60-Math.floor((data-arr[0])*60))*60,2);
    arr[1] = floatFix((Math.abs(data - arr[0])) * 60, 0, null, false)
    arr[2] = floatFix(((Math.abs(data - arr[0])) * 60 - Math.floor((data-arr[0])*60)) * 60, 2)
    return arr
  }
}
const timeToLngLat = (data) => {
  if (data.lv1 < 0) {
    return -(Math.abs(data.lv1) + Math.abs(data.lv2) / 60 + Math.abs(data.lv3) / 3600)
  } else {
    return Math.abs(data.lv1) + Math.abs(data.lv2) / 60 + Math.abs(data.lv3) / 3600
  }
}

const location = {
  lng: 120.36124999999998,
  lat: 31.50641,
  toString() {
    return `${this.lng},${this.lat}`
  }
}

// 31.5063872307,120.3615224361
// 北纬N31°30′29.47″ 东经E120°21′24.63″

console.log(timeToLngLat({lv1: 31, lv2: 30, lv3: 23.13}), timeToLngLat({lv1: 120, lv2: 21, lv3: 40.93}))
console.log(lngLatToTime(31.506425), lngLatToTime(120.22744))
