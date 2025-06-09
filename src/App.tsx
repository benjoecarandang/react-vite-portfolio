import { HashRouter } from "react-router-dom";
import AppRoutes from "@/router";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;