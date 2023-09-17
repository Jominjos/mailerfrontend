import axios from "axios";

import { useEffect, useState } from "react";

export default function Dbtable({ userChange = {} }) {
  const [db, setDb] = useState("");
  const fetchInfo = () => {
    axios
      .get("https://jodemailer.onrender.com/db")
      .then((response) => setDb(response.data));
  };

  useEffect(() => {
    fetchInfo();
    // console.log(db)
  }, [userChange]);
  // console.log(db)
  return (
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
  );
}
