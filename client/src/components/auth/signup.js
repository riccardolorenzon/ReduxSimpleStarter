import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  handleFormSubmit(formProps){
    // Call action creator to sign up the user
    this.props.signupUser(formProps);
  }

  render() {
    const { handleSubmit, fields: {email, password, passwordConfirm}} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email} />
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input type='password' className="form-control" {...password} />
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input type='password' className="form-control" {...passwordConfirm} />
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'please enter an email';
  }

  if (!values.password) {
    errors.password = 'please enter a password';
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (values.password != values.passwordConfirm) {
    errors.password = 'Password don t match'
  }
  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate: validate
})(Signup);
