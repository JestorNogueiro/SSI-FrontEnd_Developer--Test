import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="flex h-full w-full">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
