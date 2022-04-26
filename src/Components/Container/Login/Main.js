import "../../../App.css";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Yeah from "../../Yeah";

function App() {
  console.log(process.env.PUBLIC_URL);
  const [number, setNumber] = useState(0);
  const adminUser = {
    email: "1209436216",
    password: "123456",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const Login = (details) => {
    console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log(" Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };
  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <main>
      {user.email !== "" ? (
        <main>
          <div className="Welcome">
            <h2>
              Welcome,<span>{user.name}</span>
            </h2>
            <div className="box2">
              <button className="logout" onClick={Logout}>
                Logout
              </button>
            </div>
          </div>
          <Yeah number={number} setNumber={setNumber} />
        </main>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </main>
  );
}
export default App;
