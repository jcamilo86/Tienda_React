import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Formulario() {

  
  return (
    <div className="wrapeer  d-flex align-items-center justify-content w-100">
      <div className="login">
        <h2 className="mb-3">login From</h2>
        <form className="needs-validation">
        <div className="form-group was-validated mb-2">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" required></input>
          Plaase Enter you email
        </div>
        <div className="form-group was-validated mb-2">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password"  className="form-control" required></input>
          Plaase Enter your password
        </div>
        <div className="form-group form-check mb-2">
          <input type="Checbox" className="form-check-input"></input>
          <label htmlFor="check" className="form-check-label">Remember me</label>
        </div>
        <button type="submit" className="btn btn-success  block mt-2">SIGN IN</button>
        </form>
      </div>
    </div>
  );
}
