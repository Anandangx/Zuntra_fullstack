import React, {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({

      username: "",
      email: "",
      password: ""

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    navigate("/login");

  };

  return (

    <div className="form-container">

      <form onSubmit={handleSubmit}>

        <h2>Register</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;