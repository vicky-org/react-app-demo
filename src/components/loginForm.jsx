import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { login } from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    //call the server
    try {
      const { username, password } = this.state.data;
      const { data: jwt } = await login(username, password);
      localStorage.setItem("token", jwt);
      console.log("Form Submitted ", username);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        if (
          ex.response.data.includes("username") ||
          ex.response.data.includes("email")
        )
          errors.username = ex.response.data;
        else if (ex.response.data.includes("password"))
          errors.password = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
