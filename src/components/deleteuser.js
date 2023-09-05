import { useState } from "react";
import axios from "axios";

export default function Deleteuser() {
  const [delUser, setdelUser] = useState({ name: "" });
  function OnDelete(event) {
    event.preventDefault();
    axios
      .delete(`https://jodemailer.onrender.com/delete/${delUser.name}`)
      .then((response) => response.data)
      // .then(respp => console.log(respp.deletedCount))
      .then((resp) =>
        Number(resp.deletedCount) > 0
          ? alert(`succesfully deleted user ${delUser.name}`)
          : alert(`invalid username ${delUser.name}`)
      );
  }
  function delUserChange(event) {
    event.preventDefault();
    let deluser = event.target.value;
    setdelUser({ name: deluser });
    console.log(delUser);
  }
  return (
    <div className="deleteUser">
      <h2>DELETE USER</h2>

      <form id="delForm" className="delForm" onSubmit={OnDelete}>
        <div className="input-box">
          <label>UserName</label>
          <input
            placeholder="name"
            name="name"
            value={delUser.name}
            onChange={delUserChange}
          ></input>
        </div>
        <div>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
