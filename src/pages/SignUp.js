import * as React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';
import { FirebaseContext } from '../components/Firebase/index.js';
import { NavLink } from 'react-router-dom';

import '../styles/signup.css';

const phoneValidation = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('Please enter your email.'),
  password: Yup.string()
    .min(6, 'Must be greater than 6 characters.')
    .max(25, 'Must be less than 20 characters.')
    .required('Please enter a password.'),
  first: Yup.string()
    .required('Please enter your first name.'),
  last: Yup.string()
    .required('Please enter your last name.'),
  phone: Yup.string()
    .required('Please enter your phone number.')
    .matches(phoneValidation, 'Must be a valid phone number.'),
  grade: Yup.string()
    .required('Please choose your grade.')
});

const SignUpPage = () => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => <SignUp firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

class SignUp extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins'>
          <div className='wrapper wrapper--w680'>
            <div className='card card-4'>
              <div className='card-body'>
                <h2 className='title'>Registration Form</h2>

                <Formik
                  initialValues={{
                    first: '',
                    last: '',
                    email: '',
                    password: '',
                    phone: ''
                  }}
                  validationSchema={SignUpSchema}
                  onSubmit={values => {
                    console.log(values);

                    event.preventDefault();
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className='row row-space'>

                        <div className='col-2'>
                          <div className='input-group'>
                            <label className='label'>first name</label>
                            <Field className='input--style-4' name='first' />
                            <ErrorMessage name='first' component='div' className='error' />
                          </div>
                        </div>

                        <div className='col-2'>
                          <div className='input-group'>
                            <label className='label'>last name</label>
                            <Field className='input--style-4' name='last' />
                            <ErrorMessage name='last' component='div' className='error' />
                          </div>
                        </div>
                      </div>

                      <div className='row row-space'>
                        <div className='col-2'>
                          <div className='input-group'>
                            <label className='label'>Password</label>
                            <div className='input-group-icon'>
                              <Field type='password' className='input--style-4 js-datepicker' name='password' />
                              <ErrorMessage name='password' component='div' className='error'/>
                              <i className='zmdi zmdi-calendar-note input-icon js-btn-calendar' />
                            </div>
                          </div>
                        </div>

                        <div className='col-2'>
                          <div className='input-group'>
                            <label className='label'>Gender</label>
                            <div className='p-t-10'>
                              <label className='radio-container m-r-45'>
                                Male
                                <Field type='radio' name='gender' />
                                <span className='checkmark' />
                              </label>
                              <label className='radio-container'>
                                Female
                                <Field type='radio' name='gender' />
                                <span className='checkmark' />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='row row-space'>
                        <div className='col-2'>
                          <div className='input-group'>
                            <label className='label'>Email</label>
                            <Field className='input--style-4' name='email' />
                            <ErrorMessage name='email' component='div' className='error'/>
                          </div>
                        </div>

                        <div className='col-2'>
                          <div className='input-group'>
                            <label className='label'>Phone Number</label>
                            <Field className='input--style-4' name='phone' />
                            <ErrorMessage name='phone' component='div' className='error'/>
                          </div>
                        </div>
                      </div>

                      <div className='input-group'>
                        <label className='label'>Grade</label>
                        <div className='rs-select2 js-select-simple select--no-search'>
                          <select name='subject'>
                            <option disabled='disabled' selected='selected'>
                              Choose option
                            </option>
                            <option>6th</option>
                            <option>7th</option>
                            <option>8th</option>
                            <option>9th</option>
                            <option>10th</option>
                            <option>11th</option>
                            <option>12th</option>
                          </select>
                          <div className='select-dropdown' />
                        </div>
                      </div>

                      <div className='p-t-15'>
                        <button className='btn btn--radius-2 btn--blue' type='submit' disabled={isSubmitting}>
                          Submit
                        </button>
                        <p>
                          <NavLink to='/signin'>Sign In</NavLink>
                        </p>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpPage);
