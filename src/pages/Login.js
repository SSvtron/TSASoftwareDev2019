import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import '../styles/login.css';
import '../styles/util.css';
import '../styles/animate.css';
import pic from '../images/login.png';
import SignUp from './SignUp';

class Login extends React.PureComponent {
	constructor(props) {
		super();
		this.state = {
			email: '',
			password: '',
			correctPass: 'hello',
			correctName: 'shan'
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = (e) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
			});
	};

	render() {
		return (
			<div>
				<div className='limiter'>
					<div className='container-login100'>
						<div className='wrap-login100'>
							<div className='login100-pic js-tilt' data-tilt>
								<img src={pic} alt='IMG' />
							</div>

							<form className='login100-form validate-form'>
								<span className='login100-form-title'>Member Login</span>

								<div
									className='wrap-input100 validate-input'
									data-validate='Valid email is required: ex@abc.xyz'>
									<input
										className='input100'
										type='text'
										name='email'
										value={this.state.email}
										onChange={(e) => this.handleChange(e)}
										placeholder='Email'
									/>
									<span className='focus-input100'></span>
									<span className='symbol-input100'>
										<i className='fa fa-envelope' aria-hidden='true'></i>
									</span>
								</div>

								<div className='wrap-input100 validate-input' data-validate='Password is required'>
									<input
										className='input100'
										type='password'
										name='password'
										value={this.state.password}
										onChange={(e) => this.handleChange(e)}
										placeholder='Password'
									/>
									<span className='focus-input100'></span>
									<span className='symbol-input100'>
										<i className='fa fa-lock' aria-hidden='true'></i>
									</span>
								</div>

								<div className='container-login100-form-btn'>
									<button className='login100-form-btn' onClick={(e) => this.onSubmit(e)}>
										Login
									</button>
								</div>

								<div className='text-center p-t-12'>
									<span className='txt1'>Forgot</span>
									<a className='txt2' href='#'>
										Username / Password?
									</a>
								</div>

								<div className='text-center p-t-136'>
									<p>
										<NavLink to='/'>Create your Account</NavLink>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Login);
