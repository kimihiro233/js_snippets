import pcJson from './pc-code.js'

const provinces = []
pcJson.forEach(el => {
  // console.log(el.name+'\t'+el.code)
  const province = {
    name: el.name,
    code: el.code,
    children: []
  }
  el.children.forEach(city => {
    // console.log(el.name+'\t'+el.code+'\t'+city.name+'\t'+city.code)
    province.children.push({
      name: el.name,
      code: el.code
    })
  })
  provinces.push(province)
})

console.log(JSON.stringify(provinces))
