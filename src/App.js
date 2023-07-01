import "./App.css";
import MainRoute from "./routes/MainRoute";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </div>
  );
};

export default App;
