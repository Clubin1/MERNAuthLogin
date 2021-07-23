import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import '../../assets/styles/form.css'
import '../../assets/styles/dashboard.css'

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
    console.log(user)
return (
      <div className="dashboardWrapper">
        <div className="welcomeSection">
        <h4>
              <p className="flow-text dashboardText"> Your Bank: {user.bankAccount}</p>
              <p className="flow-text dashboardText grey-text text-darken-1">
                Welcome to your personal dashboard, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
                <br></br>
                View your financial status
              </p>
              
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              id="greenButton"
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);