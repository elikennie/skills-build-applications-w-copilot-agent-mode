import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  console.log('App component initialized');
  console.log('REACT_APP_CODESPACE_NAME:', process.env.REACT_APP_CODESPACE_NAME);

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <strong>OctoFit Tracker</strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/users">
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">
                    Workouts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">
                    Activities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">
                    Teams
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">
                    Leaderboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route
              path="/"
              element={
                <div className="container mt-5 text-center">
                  <h1>Welcome to OctoFit Tracker</h1>
                  <p className="lead">
                    Track your fitness activities, compete on the leaderboard, and join teams!
                  </p>
                  <p>Use the navigation menu above to get started.</p>
                </div>
              }
            />
          </Routes>
        </div>

        <footer className="footer bg-light text-center py-4 mt-5">
          <p>&copy; 2024 OctoFit Tracker. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
