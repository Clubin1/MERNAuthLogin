import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import '../../assets/styles/form.css'
import '../../assets/styles/dashboard.css'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
};

componentDidMount() {
  const { user } = this.props.auth;

  am4core.useTheme(am4themes_animated);

  // create chart

  var chart = am4core.create("chartdiv", am4charts.GaugeChart);

  chart.innerRadius = -30;

  var axis = chart.xAxes.push(new am4charts.CategoryAxis());
  axis.dataFields.category = "category";
  axis.data = [{
    category: "300"
  }, {
    category: "400"
  }, {
    category: "500"
  }, {
    category: "600"
  }, {
    category: "700"
  }, {
    category: "800"
  }];
  axis.renderer.labels.template.location = 0.5;
  axis.renderer.grid.template.location = 0.5;
  axis.startLocation = 0.5;
  axis.endLocation = 0.5;

  var colorSet = new am4core.ColorSet();

  var range0 = axis.axisRanges.create();
  range0.category = "300";
  range0.endCategory = "500";
  range0.axisFill.fillOpacity = 1;
  range0.axisFill.fill = colorSet.getIndex(0);
  range0.axisFill.zIndex = -1;
  range0.locations.category = 0.5;
  range0.locations.endCategory = 0.5;
  range0.label.text = "";
  range0.grid.disabled = true;

  var range1 = axis.axisRanges.create();
  range1.category = "500";
  range1.endCategory = "700";
  range1.axisFill.fillOpacity = 1;
  range1.axisFill.fill = colorSet.getIndex(1);
  range1.axisFill.zIndex = -1;
  range1.locations.category = 0.5;
  range1.locations.endCategory = 0.5;
  range1.label.text = "";
  range1.grid.disabled = true;

  var range2 = axis.axisRanges.create();
  range2.category = "700";
  range2.endCategory = "800";
  range2.axisFill.fillOpacity = 1;
  range2.axisFill.fill = colorSet.getIndex(2);
  range2.axisFill.zIndex = -1;
  range2.locations.category = 0.5;
  range2.locations.endCategory = 0.5;
  range2.label.text = "";
  range2.grid.disabled = true;

  var hand = chart.hands.push(new am4charts.ClockHand());
  hand.value = user.creditScore;

}

componentWillUnmount() {
  if(this.chart){
    this.chart.dispose()
  }
}
render() {
    const { user } = this.props.auth;
    console.log(user)

    let creditText;
    if(user.creditScore < 400){
      creditText = <p>Your credit score is <span className="lowCredit">Poor</span></p>
    } else if (user.creditScore < 500){
      creditText = <p>Your credit score is <span className="lowCredit">Poor</span></p>
    }
    else if (user.creditScore < 600){
      creditText = <p>Your credit score is <span className="medCredit">Fair</span></p>
    }
    else if (user.creditScore < 700){
      creditText = <p>Your credit score is <span className="highCredit">Good</span></p>
    }
    else if (user.creditScore < 800){
      creditText = <p>Your credit score is <span className="highCredit">Very Good</span></p>
    }
return (
      <div className="dashboardWrapper">
        <div className="welcomeSection">
        <h4>
              <p className="flow-text dashboardText"> Your Bank: {user.bankAccount}</p>
              <div id="chartdiv"></div>
              <p className="flow-text dashboardText grey-text text-darken-1">Your credit score:
               <span className="creditScore"> {user.creditScore}</span></p>
              {creditText}
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