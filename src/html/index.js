import cheerio from 'cheerio'
import * as axios from 'axios'

const request = axios.default.create()

const chapter = 972779
const epsilon = 31
// const chapter = 1005579
// const epsilon = 7

request({
  url: `http://m.tdtxt.cc/chapter_${chapter}_${epsilon}.html`
}).then(response => {
  const $ = cheerio.load(response.data)
  const content = $('.xs-content').text().replace(/。/g, '\r\n')
  // const lines = splitString(content, 100).join('\r\n')
  // console.log(content)
  console.log(breakContent(formatContent(content)))
}).catch(error => {
  console.error(error)
})

/**
 * @param {String} str
 * @param {Number} num
 * */
const breakContent = (str, num = 100) => {
  const arr = str.split('。\r\n')
  return arr.map(el => {
    let string = ''
    if(el.length > num) {
      for(let i = 0;i<el.length/num;i++) {
        string += el.substring(i*num, (i+1)*num) + '\r\n'
      }
    } else {
      string = el
    }
    return string
  }).join()
}

const formatContent = (str) => {
  let result = str
  result = result.replace(/\?\?\?\?/g, '')
  return result
}
