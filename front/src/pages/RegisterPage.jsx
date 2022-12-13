import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userAction } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import Success from "../components/Success";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Layout from "../components/Layout";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.registerUserReducer);
  const { loading, success, error } = registerState;
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = state;
  const handelChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password is not matched !!!");
    } else {
      const user = { name, email, password };
      setState({ name, email, password });
      console.log(user);
      dispatch(userAction(user));
      setState({ name: "", email: "", password: "", confirmPassword: "" });
    }
  };
  return (
    <Layout>
      <div className="row justify-content-center my-5">
        <div className="col-md-5 my-5 text-left">
          {loading && <Loading />}
          {success && <Success success="user registered successfully" />}
          {error && <Error error="error on email or password!" />}
          <h2
            className="text-center"
            style={{ fontSize: "35px", color: "red" }}
          >
            Register
          </h2>
          <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <input
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={handelChange("name")}
              required
            />
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
              placeholder="password"
              className="form-control"
              value={password}
              onChange={handelChange("password")}
              required
            />
            <input
              type="text"
              placeholder="confirm password"
              className="form-control"
              value={confirmPassword}
              onChange={handelChange("confirmPassword")}
              required
            />
            <div className="d-flex flex-column">
              <button
                className="btn btn-warning my-2"
                onClick={handelSubmit}
                style={{ width: "30%" }}
              >
                Register
              </button>
              <Link
                to="/login"
                style={{ color: "red", textDecoration: "none" }}
              >
                Click Here to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
