import React, { Component } from "react";
import MYitineraryLogo from "../MYtineraryLogo.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItineraries } from "../store/actions/itineraryActions.js";

class Itenerary extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };
  componentDidMount() {
    this.props.getItineraries();
  }

  render() {
    // // console.log(this.props.itineraries.title);
    // console.log(this.props);

    let id = this.props.match.params.city;

    // console.log(id);

    // let newArray = this.props.itineraries.map(item => item.city);

    // console.log(newArray);

    const itineraryList = this.props.itineraries.filter(
      item => item.city === id
    );

    console.log(itineraryList);

    // card mb-3 cities-card

    return (
      <div className="container">
        <div className="row">
          {itineraryList.map(itinerary => (
            <div className="" key={itinerary._id}>
              <div className="col card mb-3 profile">
                <div className="text-center text-info">{itinerary.title}</div>
                <div className="content center text-center font-weight-bold">
                  <img
                    className="img-fluid m-1"
                    src={itinerary.profileImage}
                    alt={itinerary.title}
                  />
                </div>

                <div div>
                  <ul>
                    <li>Price: {itinerary.price}</li>
                    <li>Duration:{itinerary.durations}</li>
                    <li>Rating: {itinerary.ratings}</li>
                    <li>Hashtag: {itinerary.hashtag}</li>
                  </ul>
                </div>

                {this.state.on && <p>{itinerary.description}</p>}

                <button onClick={this.toggle} className="btn btn-info mb-3">
                  Read More/Less
                </button>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

//We want to access the redux store so we use mapStateToProps
// let city = "";
// city = this.match.params.city;
// console.log(city);

const mapStateToProps = (state, ownProps) => {
  //   let city = ownProps.match.params.city;
  //   console.log(city);

  return {
    itineraries: state.itinerary.itineraries
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getItineraries: city => dispatch(getItineraries(city))
//   };
// };
// export default  connect(mapStateToProps, mapDispatchToProps) (Itineraries)

Itenerary.propTypes = {
  getItineraries: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getItineraries })(Itenerary);
