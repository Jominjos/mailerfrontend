import axios from "axios";
import React, { useState } from "react";

export default function Addform() {
  let initialuser = {
    name: "",
    age: "",
    Email: "",
  };
  const [uservalue, setuservalue] = useState(initialuser);
  function userchange(event) {
    let eventValue = event.target.value;
    let eventName = event.target.name;
    setuservalue({ ...uservalue, [eventName]: eventValue });
    console.log(uservalue);
  }

  async function formsubmit(event) {
    try {
      event.preventDefault();
      const res = await axios.post("https://jodemailer.onrender.com/user", {
        name: "axios",
        age: "33",
        Email: "hemanth@gmail.com",
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <h1>add user</h1>
      <form id="form1" onSubmit={formsubmit}>
        <div>
          <label>name</label>
          <input
            onChange={userchange}
            id="name"
            placeholder="name"
            value={uservalue.name}
            name="name"
          ></input>
        </div>
        <div>
          <label>age</label>
          <input
            onChange={userchange}
            id="age"
            placeholder="age"
            value={uservalue.age}
            name="age"
          ></input>
        </div>
        <div>
          <label>email</label>
          <input
            onChange={userchange}
            id="email"
            placeholder="email"
            value={uservalue.Email}
            name="Email"
          ></input>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
