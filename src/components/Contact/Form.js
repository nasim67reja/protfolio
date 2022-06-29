import useMyInput from "../../hook/UseInput";
import "./Form.css";

const Form = (props) => {
  const inputName = useMyInput((value) => value.trim() !== "");
  const inputNumber = useMyInput((value) => value.trim() !== "");
  const inputLastName = useMyInput((value) => value.trim() !== "");
  const inputEmail = useMyInput((value) => value.includes("@"));
  const inputMessage = useMyInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (
    inputName.isValid &&
    inputLastName.isValid &&
    inputEmail.isValid &&
    inputMessage.isValid
  )
    formIsValid = true;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !inputName.isValid ||
      !inputLastName.isValid ||
      !inputEmail.isValid ||
      !inputEmail.isValid
    )
      return;

    inputName.reset();
    inputLastName.reset();
    inputEmail.reset();
    inputMessage.reset();
    inputNumber.reset();
  };
  const nameInputClasses = inputName.hasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = inputLastName.hasError
    ? "form-control invalid"
    : "form-control";

  const inputEmailClasses = inputEmail.hasError
    ? "form-control invalid"
    : "form-control";

  const inputMessageClasses = inputMessage.hasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={inputName.valueChangeHandler}
            onBlur={inputName.inputBlurHandler}
            value={inputName.value}
          />
          {inputName.hasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="number">PHONE NUMBER</label>
          <input
            type="number"
            id="number"
            placeholder="optional"
            onChange={inputNumber.valueChangeHandler}
            onBlur={inputNumber.inputBlurHandler}
            value={inputNumber.value}
          />
        </div>
      </div>
      {/* Email */}
      <div className={inputEmailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={inputEmail.valueChangeHandler}
          onBlur={inputEmail.inputBlurHandler}
          value={inputEmail.value}
        />
        {inputEmail.hasError && (
          <p className="error-text">Email must be contain @ ..</p>
        )}
      </div>
      <div className={lastNameInputClasses}>
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          onChange={inputLastName.valueChangeHandler}
          onBlur={inputLastName.inputBlurHandler}
          value={inputLastName.value}
        />
        {inputLastName.hasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      <div className={inputMessageClasses}>
        <label htmlFor="input-message">YOUR MESSAGE</label>
        {/* <input
          type="text"
          id="input-message"
          onChange={inputMessage.valueChangeHandler}
          onBlur={inputMessage.inputBlurHandler}
          value={inputMessage.value}
        /> */}
        <textarea
          id="input-message"
          onChange={inputMessage.valueChangeHandler}
          onBlur={inputMessage.inputBlurHandler}
          value={inputMessage.value}
          name="contact-message"
          cols="30"
          rows="10"
        ></textarea>

        {inputMessage.hasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button className="form-btn" disabled={!formIsValid}>
          <span>Submit</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Form;
