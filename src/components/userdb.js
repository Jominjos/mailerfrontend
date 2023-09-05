import axios from "axios";
import { useEffect, useState } from "react";

export default function Dbtable() {
  const [db, setDb] = useState("");
  const fetchInfo = () => {
    return axios
      .get("https://jodemailer.onrender.com/db")
      .then((response) => setDb(response.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  let dbData = [...db];
  return <></>;
}
