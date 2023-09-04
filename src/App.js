import Addform from "./components/addform";
import "./App.css";
import Deleteuser from "./components/deleteuser";
import Sendmail from "./components/sendmail";

function App() {
  return (
    <div className="App">
      <Addform />
      <Deleteuser />
      <Sendmail />

    </div>
  );
}

export default App;
