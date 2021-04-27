import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router";
const FormEditing = ({ data, setData, item }) => {
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

    if (user.firstName == "") {
      flag = false;
    }
    if (user.email != "" && user.email.indexOf("@") === -1) {
      setError({ ...error, email: "** Enter a valid email **" });
      flag = false;
    }

    // if (user.mobile.length != 10) {
    //   setError({ ...error, mobile: "** Enter a valid mobile number **" });
    //   flag = false;
    // }
    if (flag) {
      console.log("in flag");
      const updatedData = [...data].map((info) => {
        console.log(item);
        if (info === item) {
          console.log(info);
          info = { ...user };
        }
        return info;
      });
      setData(updatedData);
      history.push("/");
    }
  };
  return (
    <div className="full">
      <div className="AddWrapper">
        <div className="dp">
          <AccountCircleIcon />{" "}
        </div>
        <div className="formWrapper">
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName"> First Name : </label>
            <input
              type="text"
              id="firstName"
              defaultValue={item.firstName}
              onChange={handleChange}
              required
            />
            <div className="error">{error.firstName}</div>
            <br />
            <label htmlFor="LastName"> Last Name : </label>
            <input
              type="text"
              id="LastName"
              defaultValue={item.LastName}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="email"> Email : </label>
            <input
              type="text"
              id="email"
              defaultValue={item.email}
              onChange={handleChange}
            />
            <div>{error.email}</div>
            <br />
            <label htmlFor="mobile">Mobile :</label>
            <input
              type="number"
              id="mobile"
              defaultValue={item.mobile}
              onChange={handleChange}
              required
            />
            <div className="error">{error.mobile}</div>
            <input type="submit" defaultValue="Update" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEditing;
