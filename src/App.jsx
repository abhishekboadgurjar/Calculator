import Calculator from "./components/Calculator";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h1>Calculator</h1>
      </div>
      <Calculator />
      <div className="footer">
        <p>Made with ❤️ by Coding4Dev</p>
      </div>
    </div>
  );
};

export default App;
