/**
 * @description translate ArrayBuffer to Base64 code
 * @param {ArrayBuffer} buffer
 * */
export const arrayBufferToBase64 = (buffer) => {
  let binary = ''
  let bytes = new Uint8Array(buffer)
  let len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}

/**
 * @description translate Base64
 * */
export const base64ToArrayBuffer = (base64) => {
  let binary_string = window.atob(base64)
  let len = binary_string.length
  let bytes = new Uint8Array(len)
  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i)
  }
  return bytes.buffer
}
