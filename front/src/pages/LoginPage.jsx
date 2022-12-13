import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions/userAction";
import Success from "../components/Success";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginReducer);
  const { loading, success, error } = loginState;
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  const handelChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, email, password });
    console.log(state);
    dispatch(loginAction(state));
  };
  return (
    <Layout>
      <div className="row justify-content-center my-5">
        <div className="col-md-5 my-5 text-left">
          <h2
            className="text-center"
            style={{ fontSize: "35px", color: "red" }}
          >
            Login
          </h2>
          <div className="shadow-lg p-3 mb-5 bg-white rounded">
            {loading && <Loading />}
            {success && <Success success="user login successfully" />}
            {error && <Error error="error on email or password!" />}
            <input
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={handelChange("email")}
              required
            />
            <input
              type="text"
              placeholder="name"
              className="form-control"
              value={password}
              onChange={handelChange("password")}
              required
            />
            <div className="d-flex flex-column">
              <button className="btn btn-warning my-2" onClick={handelSubmit}>
                Login
              </button>
              <Link
                style={{ color: "red", textDecoration: "none" }}
                to="/register"
              >
                Don't Have a count? Go To Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
