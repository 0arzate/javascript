import { ValidatorEngine } from "./validatorEngine.js";

class FormFacade {
  constructor(validatorEngine) {
    this.validator = validatorEngine;
  }

  validateField(inputTag, validations = []) {
    const inputValue = inputTag.value;


    validations.every((validation) => {
      const validationName = validation[0]
      const validationArgs = validation[1] || []

      console.log(validation)

      console.log(`Validating ${validationName} with args ${validationArgs}`)

      const isValidate = this.validator[validationName](inputValue, ...validationArgs)

      if(!isValidate) {
        console.log(`Validation ${validationName} failed`)
        return false
      }

      return true
    })
  }
}

const formFacade = new FormFacade(new ValidatorEngine())

document.querySelector('input').addEventListener('blur', (event) => {
  console.log('Validating field')
  formFacade.validateField(event.target, [['isText'], ['hasLength', [5]]])
})
