import React from 'react'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Link} from "react-router-dom";

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


import '../../assets/styles/profile.css'
class Settings extends React.Component {

    componentDidMount() {
        const {user} = this.props.auth
        console.log(user)
    }
    render() {
        const { user } = this.props.auth;
        console.log(user)
        return (
          <div className="profileWrapper">
              <div className="userSection">
                <h4>Edit your profile, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h4>
                <div className="userPfpCol">
                    <div className="userButton"></div>
                    <img src="https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg" className="userImage">
                    </img>
                </div>
                <div className="btnRow">
                <button
              style={{
                width: "10rem",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              id="greenButton"
  
              className="btn profileBtn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Hi
              </button>
              <button
              style={{
                width: "10rem",
                borderRadius: "3px",
                letterSpacing: "1.5px",

              }}
              id="greenButton"
  
              className="btn profileBtn2 btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Hi
              </button>
                </div>
              </div>

              <div className="formContainer">
              <div style={
                    {
                height:'47rem'}
                }
                className="row thingythingthing">
              <form noValidate>

              <div className="input-field col s12">
                            <input 
                                id="email"
                                type="email"
                                />
                            <label htmlFor="email">Name on Account</label>
            
                        </div>
                        <div className="input-field col s12">
                            <input 
                                id="email"
                                type="email"
                                />
                            <label htmlFor="email">Email</label>
            
                        </div>

                        <div className="input-field col s12">
                            <input 
                                id="email"
                                type="email"
                                />
                            <label htmlFor="email">Address</label>
            
                        </div>

                        <div className="input-field col s12">
                        <input 
                                id="email"
                                type="email"
                                />
                            <label htmlFor="email">Bank Account</label>
                        </div>

                        <div className="input-field col s12">
                        <input 
                                id="email"
                                type="email"
                                />
                            <label htmlFor="email">Wallet Sum</label>
                        </div>
                        <div className="input-field col s12">
                      
                        </div>
                      
                        <button style={
                                    {
                                        width: "95.5%",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem",
                                        marginLeft: ".7rem"
                                    }
                                }
                                type="submit"
                                id="greenButton"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                Save changes
                            </button>

                        </form>
                        </div>
              </div>
          </div>
        )
    }
}

Settings.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Settings);