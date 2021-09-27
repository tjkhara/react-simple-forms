import { useState } from 'react'

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  // invalid only if it was touched and is invalid
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  let formIsValid = false

  if (enteredNameIsValid) {
    formIsValid = true
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault()

    setEnteredNameTouched(true)

    if (!enteredNameIsValid) {
      return
    }

    setEnteredName('')
    setEnteredNameTouched(false)
  }

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      {/* Name */}
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput