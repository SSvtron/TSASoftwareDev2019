import * as React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

import '../styles/signup.css';

class SignUp extends React.PureComponent {
    render() {
        return (
            <div>
                <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                    <div className="wrapper wrapper--w680">
                        <div className="card card-4">
                            <div className="card-body">
                                <h2 className="title">Registration Form</h2>
                                <form method="POST">
                                    <div className="row row-space">
                                        <div className="col-2">
                                            <div className="input-group">
                                                <label className="label">first name</label>
                                                <input className="input--style-4" type="text" name="first_name" />
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="input-group">
                                                <label className="label">last name</label>
                                                <input className="input--style-4" type="text" name="last_name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-space">
                                        <div className="col-2">
                                            <div className="input-group">
                                                <label className="label">Birthday</label>
                                                <div className="input-group-icon">
                                                    <input className="input--style-4 js-datepicker" type="text" name="birthday" />
                                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="input-group">
                                                <label className="label">Gender</label>
                                                <div className="p-t-10">
                                                    <label className="radio-container m-r-45">Male
                                            <input type="radio" checked="checked" name="gender" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                    <label className="radio-container">Female
                                            <input type="radio" name="gender" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-space">
                                        <div className="col-2">
                                            <div className="input-group">
                                                <label className="label">Email</label>
                                                <input className="input--style-4" type="email" name="email" />
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="input-group">
                                                <label className="label">Phone Number</label>
                                                <input className="input--style-4" type="text" name="phone" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <label className="label">Grade</label>
                                        <div className="rs-select2 js-select-simple select--no-search">
                                            <select name="subject">
                                                <option disabled="disabled" selected="selected">Choose option</option>
                                                <option>6th</option>
                                                <option>7th</option>
                                                <option>8th</option>
                                                <option>9th</option>
                                                <option>10th</option>
                                                <option>11th</option>
                                                <option>12th</option>

                                            </select>
                                            <div className="select-dropdown"></div>
                                        </div>
                                    </div>
                                    <div className="p-t-15">
                                        <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                                        <p><NavLink to="/signin">Sign In</NavLink></p>
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