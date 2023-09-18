import axios from "axios";
import "../styles/userdb.css";
import { useEffect, useState } from "react";

export default function Dbtable({ userChange }) {
  const [db, setDb] = useState("");

  useEffect(() => {
    axios
      .get("https://jodemailer.onrender.com/db")
      .then((response) => setDb(response.data));
  }, [userChange]);

  return (
    <div className="userDb">
      <h2 id="dbHeading">User Database</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mail id </th>
          </tr>
        </thead>
        <tbody>
          {db &&
            db.length > 0 &&
            db.map((d, i) => (
              <tr key={d._id}>
                <td>{d.name}</td>
                <td>{d.Email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
