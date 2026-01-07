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
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <span className="me-2">🐙</span>
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
                    👤 Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">
                    💪 Workouts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">
                    📋 Activities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">
                    👥 Teams
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">
                    🏆 Leaderboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
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
                <div className="container mt-5">
                  <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3">🐙 Welcome to OctoFit Tracker</h1>
                    <p className="lead mb-4">
                      Your ultimate fitness companion for tracking activities, competing on leaderboards, and building teams!
                    </p>
                  </div>

                  {/* Feature Cards */}
                  <div className="data-grid">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="mb-0">📋 Track Activities</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          Log your daily fitness activities and monitor your progress with detailed statistics.
                        </p>
                        <Link to="/activities" className="btn btn-primary btn-sm">
                          View Activities
                        </Link>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h5 className="mb-0">💪 Explore Workouts</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          Discover customized workouts tailored to your fitness level and goals.
                        </p>
                        <Link to="/workouts" className="btn btn-primary btn-sm">
                          View Workouts
                        </Link>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h5 className="mb-0">🏆 Compete</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          Challenge yourself and climb the global leaderboard rankings.
                        </p>
                        <Link to="/leaderboard" className="btn btn-primary btn-sm">
                          View Leaderboard
                        </Link>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h5 className="mb-0">👥 Join Teams</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          Team up with friends and compete together for greater rewards.
                        </p>
                        <Link to="/teams" className="btn btn-primary btn-sm">
                          View Teams
                        </Link>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h5 className="mb-0">👤 Community</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          Connect with other fitness enthusiasts and share your achievements.
                        </p>
                        <Link to="/users" className="btn btn-primary btn-sm">
                          View Users
                        </Link>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h5 className="mb-0">🚀 Get Started</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          Start your fitness journey today and become part of the OctoFit community!
                        </p>
                        <button className="btn btn-success btn-sm">Sign Up Now</button>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="alert alert-info mt-5" role="alert">
                    <h4 className="alert-heading">Ready to Get Fit? 💪</h4>
                    <p>
                      Use the navigation menu at the top to explore features, track your progress, and join the OctoFit community!
                    </p>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="footer bg-dark text-white py-4 mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 text-center">
                <h6>OctoFit Tracker</h6>
                <p className="small">Your fitness companion</p>
              </div>
              <div className="col-md-4 text-center">
                <h6>Navigation</h6>
                <p className="small">
                  <Link to="/users" className="link-light">Users</Link> | 
                  <Link to="/workouts" className="link-light ms-1"> Workouts</Link> | 
                  <Link to="/leaderboard" className="link-light ms-1"> Leaderboard</Link>
                </p>
              </div>
              <div className="col-md-4 text-center">
                <h6>Support</h6>
                <p className="small">
                  <a href="#help" className="link-light">Help</a> | 
                  <a href="#about" className="link-light ms-1"> About</a> | 
                  <a href="#contact" className="link-light ms-1"> Contact</a>
                </p>
              </div>
            </div>
            <hr className="my-3" />
            <div className="text-center">
              <p className="mb-0">&copy; 2024 OctoFit Tracker. All rights reserved. 🐙</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
