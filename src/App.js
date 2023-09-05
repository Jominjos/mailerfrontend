import Addform from "./components/addform";
import "./App.css";
import Deleteuser from "./components/deleteuser";
import Sendmail from "./components/sendmail";

import Dbtable from "./components/userdb";

function App() {
  return (
    <div>
      <h1 className="head">Node mailer</h1>
    <div className="App">
      
      <Addform />
      <Deleteuser />
      <Sendmail />
      <Dbtable />
    </div>
    </div>
  );
}

export default App;
