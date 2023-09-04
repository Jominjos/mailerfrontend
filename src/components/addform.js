import React, { useState } from "react";

export default function Addform() {
  let initialuser = {
    name: "",
    age: "",
    Email: "",
  };
  const [uservalue, setuservalue] = useState(initialuser);
  //const [oldDb, setOldDb] = useState([]);
  const [formsubBool, setFormsubBool] = useState(true);

  function userchange(event) {
    let eventValue = event.target.value;
    let eventName = event.target.name;
    // const{value, name} = event.target
    // setuservalue({ ...uservalue, [eventName]: eventValue });
    setuservalue((prev) => {
      return {
        ...prev,
        [eventName]: eventValue,
      };
    });
  }
  console.log(uservalue);

  fetch("https://jodemailer.onrender.com/db")
    .then((response) => response.json())
    .then((data) => {
      // Use the data fetched from the server
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occur during the fetch
      console.error(error);
    });

  function formsubmit(event) {
    event.preventDefault();

    fetch("https://jodemailer.onrender.com/user", {
      method: "POST", // Specify the HTTP method as POST
      headers: {
        "Content-Type": "application/json", // Set the content type for JSON data
        // You may need to include additional headers if required by the server
      },
      body: JSON.stringify(uservalue), // Convert data to a JSON string
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((responseData) => {
        // Handle the response data here
        console.log(responseData);
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch or JSON parsing
        console.error(error);
      });
    setFormsubBool(!formsubBool);
  }
  return (
    <div className="addUser">
      <h2>add user</h2>
      <form id="form1" className="form1" onSubmit={formsubmit}>
        <div className="input-box">
          <label>name</label>
          <input
            onChange={userchange}
            required
            id="name"
            placeholder="name"
            value={uservalue.name}
            name="name"
          ></input>
        </div>
        <div className="input-box">
          <label>age</label>
          <input
            onChange={userchange}
            id="age"
            required
            type="number"
            placeholder="age"
            value={uservalue.age}
            name="age"
            x
          ></input>
        </div>
        <div className="input-box">
          <label>email</label>
          <input
            onChange={userchange}
            type="email"
            required
            id="email"
            placeholder="email"
            value={uservalue.Email}
            name="Email"
          ></input>
        </div>
        <div>
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
