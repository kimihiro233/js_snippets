function isNode () {
  if (typeof(window) === 'undefined') {
    console.log('node.js');
    return true
  } else {
    console.log('browser');
    return false
  }
}
