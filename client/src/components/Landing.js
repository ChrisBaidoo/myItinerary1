import React, { Component } from "react";
import MYitineraryLogo from "../MYtineraryLogo.png";
import Rome from "../Rome.jpg";

class Landing extends Component {
  render() {
    return (
      <div className="landing container">
        <img src={MYitineraryLogo} className="logo" alt="MYitinerary logo" />
        <p className="blue-text">
          Find your perfect trip, designed by insiders who know and love their
          cities
        </p>
        <h6>Start browsing</h6>
        <img src={Rome} className="rome" alt="Rome" />
        <p>Want to build your own MYitinerary?</p>

        <div className="row">
          <div className="col-sm-6">
            <button className="btn text-white btn-info mr-5">
              <a href="/">Login</a>
            </button>
          </div>
        </div>
        <div className="buttons">
          <button className="btn btn-info ml-5">
            <a href="/">Create Account</a>
          </button>
        </div>
      </div>
    );
  }
}
export default Landing;
