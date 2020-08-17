/**
 * const data = initData()
 * call data as full new data instead data()
 *
 * */

const initData = (()=> (data) => {
  return data
})()

const data = initData({a: 'a'})

console.log(data)
