import React from 'react'

const Register = () => {
    return (
      <div>
        <form>
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <input
            type="name"
            className="form-control"
            placeholder="Name"
          />
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
}

export default Register
