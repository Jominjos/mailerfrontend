import Addform from "./components/addform";
import "./App.css";
import Deleteuser from "./components/deleteuser";
import Sendmail from "./components/sendmail";

import Dbtable from "./components/userdb";
import { useState } from "react";

function App() {
  const [userChange, setUserChange] = useState(true);
  return (
    <div>
      <h1 className="head">Jode Mailer</h1>
      <div className="App">
        <Addform userChange={userChange} setUserChange={setUserChange} />
        <Deleteuser userChange={userChange} setUserChange={setUserChange} />
        <Sendmail userChange={userChange} />
        <Dbtable userChange={userChange} />
      </div>
    </div>
  );
}

export default App;
