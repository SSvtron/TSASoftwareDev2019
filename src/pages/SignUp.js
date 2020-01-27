import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import '../styles/signup.css';

class SignUp extends React.PureComponent {
    constructor(props) {
        super();
        this.state = {
            first: '',
            last: '',
            gender: '',
            phone: '',
            grade: '',
            email: '',
            password: ''
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
            .createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        console.log(this.state.gender);
    };

    render() {
        return (
            <div>
                <div className='page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins'>
                    <div className='wrapper wrapper--w680'>
                        <div className='card card-4'>
                            <div className='card-body'>
                                <h2 className='title'>Registration Form</h2>
                                <form method='POST'>
                                    <div className='row row-space'>
                                        <div className='col-2'>
                                            <div className='input-group'>
                                                <label className='label'>first name</label>
                                                <input
                                                    className='input--style-4'
                                                    type='text'
                                                    name='first'
                                                    value={this.state.first}
                                                    onChange={(e) => this.handleChange(e)}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            <div className='input-group'>
                                                <label className='label'>last name</label>
                                                <input
                                                    className='input--style-4'
                                                    type='text'
                                                    name='last'
                                                    value={this.state.last}
                                                    onChange={(e) => this.handleChange(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row row-space'>
                                        <div className='col-2'>
                                            <div className='input-group'>
                                                <label className='label'>Password</label>
                                                <div className='input-group-icon'>
                                                    <input
                                                        className='input--style-4 js-datepicker'
                                                        type='password'
                                                        name='password'
                                                        value={this.state.password}
                                                        onChange={(e) => this.handleChange(e)}
                                                    />
                                                    <i className='zmdi zmdi-calendar-note input-icon js-btn-calendar'></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            <div className='input-group'>
                                                <label className='label'>Gender</label>
                                                <div className='p-t-10'>
                                                    <label className='radio-container m-r-45'>
                                                        Male
														<input
                                                            type='radio'
                                                            checked='checked'
                                                            name='gender'
                                                            value={this.state.gender}
                                                            onChange={(e) => this.handleChange(e)}
                                                        />
                                                        <span className='checkmark'></span>
                                                    </label>
                                                    <label className='radio-container'>
                                                        Female
														<input type='radio' name='gender' />
                                                        <span className='checkmark'></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row row-space'>
                                        <div className='col-2'>
                                            <div className='input-group'>
                                                <label className='label'>Email</label>
                                                <input
                                                    className='input--style-4'
                                                    type='email'
                                                    name='email'
                                                    value={this.state.email}
                                                    onChange={(e) => this.handleChange(e)}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            <div className='input-group'>
                                                <label className='label'>Phone Number</label>
                                                <input
                                                    className='input--style-4'
                                                    type='text'
                                                    name='phone'
                                                    value={this.state.phone}
                                                    onChange={(e) => this.handleChange(e)}
                                                />
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
                                            <div className='select-dropdown'></div>
                                        </div>
                                    </div>
                                    <div className='p-t-15'>
                                        <button
                                            className='btn btn--radius-2 btn--blue'
                                            type='submit'
                                            onClick={(e) => this.onSubmit(e)}>
                                            Submit
										</button>
                                        <p>
                                            <NavLink to='/signin'>Sign In</NavLink>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SignUp);
