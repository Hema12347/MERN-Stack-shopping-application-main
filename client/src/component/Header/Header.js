import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../action/auth";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const style = {
    textDecoration: "none",
    color: "red",
    border: "none",
    ":hover": {
      color: "white",
    },
  };
  const authLinks = (
    <Fragment>
      <Link to="/dashboard">
         <button className="btn  my-2 my-sm-0" type="submit" style={{border:"none"}}> 
          All Products
        </button>
      </Link>
      &nbsp; &nbsp;
      <Link to="/cart">
        <button className="btn  my-2 my-sm-0" type="submit">
          Cart
        </button>
      </Link>
      &nbsp; &nbsp;
      <Link to="/order">
        <button className="btn  my-2 my-sm-0" type="submit">
          Orders
        </button>
      </Link>
      &nbsp; &nbsp;
      <button onClick={logout} className="btn  my-2 my-sm-0" type="submit">
        Logout
      </button>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <Link to="/login" style={style}>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Login
        </button>
      </Link>{" "}
      &nbsp; &nbsp;
      <Link to="/register" style={style}>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Register
        </button>
      </Link>
    </Fragment>
  );
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <span style={{color:"blue"}}>G</span>adget<span style={{color:"red"}}>N</span>ow 
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          <form className="form-inline my-2 my-lg-0">
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          </form>
        </div>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
