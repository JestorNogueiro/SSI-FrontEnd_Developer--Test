import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import User from "./components/user";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="flex h-full w-full">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="user" element={<User />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
