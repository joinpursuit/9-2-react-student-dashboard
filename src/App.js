import Test from "../src/components/Test.jsx";
import "../src/components/index.css";

function App() {
  return (
    <div className="main">
      <div className="heading">
        <div>
          <h1>Student Dashboard</h1>
        </div>
      </div>
      <div className="heading">
        <div></div>
      </div>
      <div className="spacer">
        <div className="dark">
          <Test />
        </div>
      </div>
    </div>
  );
}

export default App;
