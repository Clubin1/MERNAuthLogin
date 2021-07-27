import React from 'react'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import '../../assets/styles/profile.css'

class SearchLoans extends React.Component {

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
                <h4>View all of our loans, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h4>
            
              </div>
          </div>
        )
    }
}

SearchLoans.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(SearchLoans);