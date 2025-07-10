import Header from "./components/Header";
import './App.css';
import { Auth } from "./components/Auth";

function App() {
  return (
  <div className="app-body">
    <Header />

    <div className="main-section">
    <h2>Get to work!</h2>
    <p>StrongBand will track your workouts and analyze your data to provide insights. Keep up the good work - Jared Spice</p>
    <button>Log a workout</button>
    </div>
  </div>
  );
}
export default App;