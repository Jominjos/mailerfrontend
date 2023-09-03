import { useState } from "react";

export default function Deleteuser() {
  const [delUser, setdelUser] = useState({});
  function OnDelete(event) {
    event.preventDefault();
    console.log(`ondel`);
  }
  function delUserChange() {}
  return (
    <>
      <h1>Delete User</h1>

      <form id="delForm" onSubmit={OnDelete}>
        <div>
          <label>userName</label>
          <input
            placeholder="name"
            name="name"
            value={delUser.name}
            onChange={delUserChange}
          ></input>
        </div>
        <div>
          <button type="submit">Delete</button>
        </div>
      </form>
    </>
  );
}
