import { useState } from "react";

export default function Deleteuser() {
  const [delUser, setdelUser] = useState({});
  function OnDelete(event) {
    event.preventDefault();
    console.log(`ondel`);
  }
  function delUserChange() {}
  return (
    <div className="deleteUser">
      <h2>Delete User</h2>

      <form id="delForm" className="delForm" onSubmit={OnDelete}>
        <div className="input-box">
          <label>userName</label>
          <input
            placeholder="name"
            name="name"
            value={delUser.name}
            onChange={delUserChange}
          ></input>
        </div>
        <div>
          <button type="submit" className="btn btn-danger">Delete</button>
        </div>
      </form>
    </div>
  );
}
