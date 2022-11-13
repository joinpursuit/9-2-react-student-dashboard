import Test from "../src/components/Test.jsx";
import "./index.css";

function App() {
  return (
    <div className="main">
      <div className="heading">
        <div>
          <h1>Student Dashboard</h1>{" "}
          <img
            className="logo"
            src="https://images.squarespace-cdn.com/content/v1/5ea906bfb2891a7f00d30604/1591593368495-WTN6Z0NU1GKJ9N2PO90B/Pursuit%2BLogo%2BBlack.png"
            alt="logo"
          />
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
