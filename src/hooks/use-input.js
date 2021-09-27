import { useState } from 'react'

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('')

  const [isTouched, setIsTouched] = useState(false)

  // Name validation
  const valueIsValid = validateValue(enteredValue)
  // invalid only if it was touched and is invalid
  const hasError = !valueIsValid && isTouched

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value)
  }

  const inputBlurHandler = () => {
    setIsTouched(true)
  }

  const reset = () => {
    setEnteredValue('')
    setIsTouched(false)
  }

  return {
    value: enteredValue,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValid: valueIsValid,
    reset,
  }
}

export default useInput
