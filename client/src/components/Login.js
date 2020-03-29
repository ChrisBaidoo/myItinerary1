import React, { Component } from "react";
import { Link } from "react-router-dom";
import MYitineraryLogo from "../MYtineraryLogo.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../store/actions/authActions";
import classnames from "classnames";

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
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(userData);
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <img src={MYitineraryLogo} className="logo" alt="MYitinerary logo" />

        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i class="fas fa-angle-double-left"></i> Back to home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);

// import React, { Component } from "react";
// import MYitineraryLogo from "../MYtineraryLogo.png";

// class Login extends Component {
//   render() {
//     return (
//       <div className="landing container">
//         <img src={MYitineraryLogo} className="logo" alt="MYitinerary logo" />
//         <form className="mt-3">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-lg-6">
//                 <div className="card bg-light">
//                   <div className="card-body">
//                     <h3 className="font-weight-light mb-3">Log in</h3>
//                     <section className="form-group">
//                       <label
//                         className="form-control-label sr-only"
//                         htmlFor="Email"
//                       >
//                         Email
//                       </label>
//                       <input
//                         required
//                         className="form-control"
//                         type="email"
//                         id="email"
//                         name="email"
//                         placeholder="Email"
//                       />
//                     </section>
//                     <section className="form-group">
//                       <input
//                         required
//                         className="form-control"
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                       />
//                     </section>
//                     <div className="form-group text-right mb-0">
//                       <button className="btn btn-primary" type="submit">
//                         Log in
//                       </button>
//                       <button className="btn btn-primary" type="submit">
//                         Log in with Google
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
// export default Login;
