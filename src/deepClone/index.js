function clone (obj) {
  const target = {}
  obj.keys().forEach(key => {
    if (typeof obj[key] === 'object') {
      target[key] = clone(obj[key])
    } else {
      target[key] = obj[key]
    }
  })
  return target
}


