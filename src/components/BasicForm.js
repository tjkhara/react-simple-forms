import useInput from '../hooks/use-input'

const BasicForm = (props) => {
  // First name
  const {
    value: enteredFirstName,
    hasError: firstnameInputHasError,
    valueChangeHandler: firstnameChangedHandler,
    inputBlurHandler: firstnameBlurHandler,
    isValid: enteredFirstNameIsValid,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== '')

  // Last name
  const {
    value: enteredLastName,
    hasError: lastnameInputHasError,
    valueChangeHandler: lastnameChangedHandler,
    inputBlurHandler: lastnameBlurHandler,
    isValid: enteredLastNameIsValid,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== '')

  // Email validation
  function ValidateEmail(inputText) {
    let isValid = false
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (inputText.match(mailformat)) {
      isValid = true
    } else {
      isValid = false
    }
    return isValid && inputText.trim() !== ''
  }

  // For email
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput,
  } = useInput(ValidateEmail)

  let formIsValid = false

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault()

    if (
      !enteredFirstNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid
    ) {
      return
    }

    resetFirstNameInput()
    resetLastNameInput()
    resetEmailInput()
  }

  const firstnameInputClasses = firstnameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const lastnameInputClasses = firstnameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`control-group ${firstnameInputClasses}`}>
        <div className='form-control'>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            onChange={firstnameChangedHandler}
            onBlur={firstnameBlurHandler}
            value={enteredFirstName}
          />
          {firstnameInputHasError && (
            <p className='error-text'>Name must not be empty</p>
          )}
        </div>
        <div className={`control-group ${lastnameInputClasses}`}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            onChange={lastnameChangedHandler}
            onBlur={lastnameBlurHandler}
            value={enteredLastName}
          />
          {lastnameInputHasError && (
            <p className='error-text'>Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={`control-group ${emailInputClasses}`}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='name'
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
