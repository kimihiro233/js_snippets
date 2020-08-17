export function clone (obj) {
  const target = obj instanceof Array ? [] : {}
  Object.keys(obj).forEach(key => {
    console.log(key, typeof obj[key], typeof obj[key])
    if (typeof obj[key] === 'object') {
      target[key] = clone(obj[key])
    } else {
      target[key] = obj[key]
    }
  })
  return target
}


