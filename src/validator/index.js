import schema from 'async-validator'
import {RegExp} from './regexs.js'

/**
 * @param {Promise} padding
 * @param {String} [validatorName = '']
 * */
const validatorHandler = (padding, validatorName = '') => {
  padding.then(() => {
    console.log(validatorName, 'got true')
  }).catch(error => {
    const message = error.errors[0].message
    console.error(validatorName, message)
  })
}

/* validateType regexp */
const regExpTester = (value) => {
  const requiredRegValidator = new schema.default({email: [{required: true, message:'请输入电子邮箱'},
      {pattern: RegExp.email, message: '请输入正确的电子邮箱'}]})
  validatorHandler(requiredRegValidator.validate({email: value}), 'requiredRegValidator')

  const regExpValidator = new schema.default({email: {pattern: RegExp.email, message: '请输入正确的电子邮箱'}})
  validatorHandler(regExpValidator.validate({email: value}), 'regExpValidator')
}

/* testCall */
// regExpTester('')
// regExpTester('anyString')
// regExpTester('anyString@email')

/* validateType string */
const stringTester = (value) => {
  const minLengthValidator = new schema.default({value: [{required: true, message:'please enter String'},
      {min: 6, message: 'please enter at least 6 characters'}]})
  validatorHandler(minLengthValidator.validate({value}), 'minLengthValidator')

  const lenValidator = new schema.default({value: [{required: true, message:'please enter String'},
      {len: 4, message: 'please enter 4 characters'}]})
  validatorHandler(lenValidator.validate({value}), 'lenValidator')
}

/* testCall */
stringTester('abcd')
