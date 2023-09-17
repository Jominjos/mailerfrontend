import React, { useState } from "react";

export default function Addform({ userChange = {}, setUserChange = {} }) {
  let initialuser = {
    name: "",
    age: "",
    Email: "",
  };
  const [uservalue, setuservalue] = useState(initialuser);
  //const [oldDb, setOldDb] = useState([]);

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

  function formsubmit(event) {
    event.preventDefault();
    setuservalue(initialuser);

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
    setUserChange = !userChange;
  }
  return (
    <div className="addUser">
      <h2>ADD USER</h2>
      <form id="form1" className="form1" onSubmit={formsubmit}>
        <div className="input-box">
          <label>Name</label>
          <input
            onChange={userchange}
            required
            id="name"
            placeholder="Name"
            value={uservalue.name}
            name="name"
          ></input>
        </div>
        <div className="input-box">
          <label>Age</label>
          <input
            onChange={userchange}
            id="age"
            required
            type="number"
            placeholder="Age"
            value={uservalue.age}
            name="age"
            x
          ></input>
        </div>
        <div className="input-box">
          <label>Email</label>
          <input
            onChange={userchange}
            type="email"
            required
            id="email"
            placeholder="mail id"
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
