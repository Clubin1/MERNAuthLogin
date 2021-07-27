import React from 'react'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import '../../assets/styles/profile.css'

class Insurance extends React.Component {

    componentDidMount() {
        const {user} = this.props.auth
        console.log(user)
    }
    render() {
        const { user } = this.props.auth;
        console.log(user)
        return (
          <div className="">
              <div className="">
                
              </div>
          </div>
        )
    }
}

Insurance.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Insurance);