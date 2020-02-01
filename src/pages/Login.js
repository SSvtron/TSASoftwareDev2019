import * as React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { FirebaseContext } from '../components/Firebase/index.js';
import { withRouter } from 'react-router-dom';

import '../styles/login.css';
import '../styles/util.css';
import '../styles/animate.css';
import pic from '../images/login.png';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email. ')
    .required('An email is required.'),
  password: Yup.string()
    .required('A password is required.'),
});

const LoginPage = () => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => <Login firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='limiter'>
          <div className='container-login100'>
            <div className='wrap-login100'>
              <div className='login100-pic js-tilt' data-tilt>
                <img src={pic} alt='IMG' />
              </div>

              <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}
                validationSchema={LoginSchema}
                onSubmit={values => {
                  console.log(values);
                  this.props.firebase
                    .doSignInWithEmailAndPassword(values.email, values.password)
                    .then(user => {
                      alert('Success');
                    })
                    .catch(err => {
                      alert(err);
                    });

                  event.preventDefault();
                }}
              >
                {({ isSubmitting }) => (
                  <Form className='login100-form'>
                    <span className='login100-form-title'>Member Login</span>

                    <div className='wrap-input100'>
                      <Field className='input100' name='email' placeholder='Email' />
                      <ErrorMessage name='email' component='div' className='error'/>

                      <span className='focus-input100' />
                      <span className='symbol-input100'>
												<i className='fa fa-envelope' aria-hidden='true' />
											</span>
                    </div>

                    <div className='wrap-input100'>
                      <Field type='password' className='input100' name='password' placeholder='Password' />
                      <ErrorMessage name='password' component='div' className='error'/>

                      <span className='focus-input100' />
                      <span className='symbol-input100'>
												<i className='fa fa-lock' aria-hidden='true' />
											</span>
                    </div>

                    <div className='container-login100-form-btn'>
                      <button type='submit' className='login100-form-btn' disabled={isSubmitting}>
                        Login
                      </button>
                    </div>

                    <div className='text-center p-t-12'>
                      <span className='txt1'>Forgot </span>
                      <a className='txt2' href='#'>
                        Username / Password?
                      </a>
                    </div>

                    <div className='text-center p-t-136'>
                      <p>
                        <NavLink to='/'>Create your Account</NavLink>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);
