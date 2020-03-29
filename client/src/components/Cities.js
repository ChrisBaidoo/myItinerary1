import React, { Component } from "react";
// import axios from "axios";
import MYitineraryLogo from "../MYtineraryLogo.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCities } from "../store/actions/cityActions.js";
import { Link } from "react-router-dom";

// import Footer from "./components/Footer.js";

class Cities extends Component {
  state = {
    filter: ""
  };

  componentDidMount() {
    this.props.getCities();
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    console.log(this.props);
    let filter = this.state.filter;
    console.log(this.props.cities);
    console.log(typeof this.props.cities);

    let filteredData = this.props.cities.filter(city => {
      let lowercasedFilter = filter.toLowerCase();
      return (
        city.name.toLowerCase().match(lowercasedFilter) ||
        city.country.toLowerCase().match(lowercasedFilter)
      );
    });

    console.log(filteredData);

    return (
      <div>
        <div className=" card bg-light mb-4 landing container">
          <img src={MYitineraryLogo} className="logo" alt="MYitinerary logo" />

          <div className="card-body text-center ">
            <input
              className="rounded shadow-none bg-light"
              value={filter}
              onChange={this.handleChange}
              placeholder="Search for cities.."
            />
          </div>
        </div>

        {filteredData.map(city => (
          <Link to={"/" + city.name}>
            <div className="card mb-3 cities-card" key={city._id}>
              <div className="content center text-center font-weight-bold">
                {city.name}
                <img className="img-fluid" src={city.img} alt={city.name} />
              </div>
              <div></div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

//We want to access the redux store so we use mapStateToProps

const mapStateToProps = state => {
  return {
    cities: state.city.cities
  };
};

Cities.propTypes = {
  getCities: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getCities })(Cities);
