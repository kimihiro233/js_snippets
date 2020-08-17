import Schema from 'async-validator'


const checkRules = {
  order: [{
    type: 'object',
    required: true,
    fields: {
      cityId: {type: 'number', required: true},
      districtId: {type: 'number', required: true},
      connectGridDate: {type: 'date', required: true},
      deviceCost: {type: 'number', required: true},
      endDate: {type: 'date', required: true},
      firstBeneficiary: {
        required: true,
        validator: (rules, value, callback) => {
          console.log(rules, value)
          callback()
        },
      },
    },
  }],
  customerRelList: [],
  invoice: [],
  orderInsuranceTypeRelList: [],
  productNo: [],
  electricityGenerationInfo: [],
  imageList: [],
}
const validate = new Schema.default(checkRules)

new Promise((resolve, reject) => {
  const source = {
    order: {
      cityId: 10,
    },
  }
  validate.validate(source, (err, res) => {
    if (err)
      reject(err)
    else
      resolve(res)
  })
}).then(res => {
  console.log('success')
  console.log(res)
}).catch(err => {
  console.log('error')
  console.error(err)
})
