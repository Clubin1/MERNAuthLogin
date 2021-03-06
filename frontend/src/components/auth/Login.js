import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {loginUser} from "../../actions/authActions";

import classnames from "classnames";

import '../../assets/styles/form.css'
import '../../assets/styles/styles.css'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }
    onChange = e => {
        this.setState({[e.target.id]: e.target.value});
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };

    guestUser = e => {
        e.preventDefault();
        let email = "guestacc@gmail.com"
        let pass = "123123"
        const userData = {
            email: email,
            password: pass
        }
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    }
    render() {
        const {errors} = this.state;
        return (<div className='center'>
            <div className="formContainer">
            <div style={
                    {marginTop: "3rem",
                height:'47rem'}
                }
                className="row form">
                <div className="">
                    <Link to="/" className="btn-flat waves-effect">
                        <i className="linkHover material-icons left">keyboard_backspace</i>
                        Back to
                                      home
                    </Link>
                    <div className="col s12"
                        style={
                            {paddingLeft: "11.250px"}
                    }>
                        <h4>
                            <b>Login</b> below
                        </h4>
                        <p className="grey-text text-darken-1">
                            Don't have an account?
                            <Link className='textColor' to="/register"> Sign up</Link>
                        </p>
                    </div>
                    <form noValidate
                        onSubmit={
                            this.onSubmit
                    }>
                        <div className="input-field col s12">
                            <input onChange={
                                    this.onChange
                                }
                                value={
                                    this.state.email
                                }
                                error={
                                    errors.email
                                }
                                id="email"
                                type="email"
                                className={
                                    classnames("", {
                                        invalid: errors.email || errors.emailnotfound
                                    })
                                }/>
                            <label htmlFor="email">Email</label>
                            <span className="red-text"> {
                                errors.email
                            }
                                {
                                errors.emailnotfound
                            } </span>
                        </div>
                        <div className="input-field col s12">
                            <input onChange={
                                    this.onChange
                                }
                                value={
                                    this.state.password
                                }
                                error={
                                    errors.password
                                }
                                id="password"
                                type="password"
                                className={
                                    classnames("", {
                                        invalid: errors.password || errors.passwordincorrect
                                    })
                                }/>
                            <label htmlFor="password">Password</label>
                            <span className="red-text"> {
                                errors.password
                            }
                                {
                                errors.passwordincorrect
                            } </span>
                        </div>
                        <div className="col s12"
                            style={
                                {paddingLeft: "11.250px"}
                        }>
                            <button style={
                                    {
                                        width: "100%",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem",
                                    }
                                }
                                type="submit"
                                id="greenButton"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                Login
                            </button>

                        
                            
                        </div>
                        <div className="col s12"
                            style={
                                {marginTop: "2rem"}
                        }>
                        <p className="grey-text text-darken-1">
                            
        
                              <Link
                                onClick={this.guestUser}
                                className="waves-effect waves-light">
                                Login with a guest user for free!
                            </Link>
                          
                        </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>);
    }
} Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({auth: state.auth, errors: state.errors});
export default connect(mapStateToProps, {loginUser})(Login);
