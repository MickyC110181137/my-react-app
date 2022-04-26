import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";
import { Container } from "./LonginForm.style";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({
    phone: "",
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    Login(details);
    console.log(details);
    await axios({
      method: "POST",
      url: "https://evening-cliffs-38545.herokuapp.com/api/user",
      data: details,
      headers: {
        "content-type": "application/json: charset=UTF-8",
      },
    });
  };

  return (
    <main>
      <Container>123</Container>
      <form onSubmit={submitHandler}>
        <div className="Login">
          <div className="box">
            <h1>LOGIN</h1>
            {error !== "" ? <div className="error">{error}</div> : ""}
          </div>
          <div className="box">
            <div className="form">
              <input
                type="text"
                name="name"
                id="name"
                className="form__input"
                autoComplete="off"
                placeholder=" "
                onChange={(e) =>
                  setDetails({ ...details, phone: e.target.value })
                }
                value={details.phone}
              />
              <label htmlFor="email" className="form__label">
                你の名字
              </label>
            </div>
          </div>
          <div className="box">
            <div className="form">
              <input
                type="text"
                id="email"
                className="form__input"
                autoComplete="off"
                placeholder=" "
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
              <label htmlFor="email" className="form__label">
                你の帳號
              </label>
            </div>
          </div>
          <div className="box">
            <div className="form">
              <input
                type="password"
                name="password"
                id="passwordword"
                className="form__input"
                autoComplete="off"
                placeholder=" "
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
              <label htmlFor="password" className="form__label">
                汝密碼，吾收之
              </label>
            </div>
          </div>
          <div className="box">
            <div className="boxer" method="post">
              <input type="submit" name="" value="LOGIN"></input>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default LoginForm;
