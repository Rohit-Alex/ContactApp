import React, { useState } from "react";
import "./style.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router";
const Form = ({ setData }) => {
  let history = useHistory();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });
  const [error, setError] = useState({ firstName: "", mobile: "", email: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    console.log("in handle submit");
    if (user.firstName == "") {
      flag = false;
    }
    if (user.email != "" && user.email.indexOf("@") === -1) {
      setError({ ...error, email: "** Enter a valid email **" });
      flag = false;
    }

    if (user.mobile.length != 10) {
      setError({ ...error, mobile: "** Enter a valid mobile number **" });
      flag = false;
    }
    if (flag) {
      localStorage.setItem("user", JSON.stringify(user));
      const uniqueUser = { ...user, id: new Date().getTime() };
      setData((prev) => [...prev, uniqueUser]);
      history.push("/");
    }
  };
  return (
    <div className="full">
      <div className="AddWrapper">
        <div className="dp">
          <AccountCircleIcon />
        </div>
        <div className="formWrapper">
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName"> First Name : </label>
            <input
              type="text"
              id="firstName"
              value={user.firstName}
              onChange={handleChange}
              required
            />
            <div className="error">{error.firstName}</div>
            <br />
            <label htmlFor="LastName"> Last Name : </label>
            <input
              type="text"
              id="LastName"
              value={user.LastName}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="email"> Email : </label>
            <input
              type="text"
              id="email"
              value={user.email}
              onChange={handleChange}
            />
            <div>{error.email}</div>
            <br />
            <label htmlFor="mobile">Mobile :</label>
            <input
              type="number"
              id="mobile"
              value={user.mobile}
              onChange={handleChange}
              required
            />
            <div className="error">{error.mobile}</div>
            <input type="submit" value="Add" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
