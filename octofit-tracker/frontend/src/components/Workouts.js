import React, { useState, useEffect } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.REACT_APP_CODESPACE_NAME 
          ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
          : 'http://localhost:8000/api/workouts/';
        console.log('Fetching Workouts from:', apiUrl);
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        console.log('Workouts API Response:', data);
        
        // Handle both paginated and plain array responses
        const workoutsList = data.results || data;
        setWorkouts(Array.isArray(workoutsList) ? workoutsList : []);
        setError(null);
      } catch (err) {
        console.error('Error fetching workouts:', err);
        setError('Failed to load workouts');
        setWorkouts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  const getDifficultyBadgeClass = (difficulty) => {
    const level = (difficulty || 'medium').toLowerCase();
    if (level === 'easy') return 'bg-success';
    if (level === 'hard') return 'bg-danger';
    return 'bg-warning text-dark';
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading workouts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          <strong>Error:</strong> {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="section-title mb-0">💪 Workouts</h2>
        <button className="btn btn-primary">Create Workout</button>
      </div>
      
      {workouts.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🏋️</div>
          <h4>No Workouts Found</h4>
          <p className="text-muted">Get started by creating your first workout plan!</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Workout Name</th>
                <th scope="col">Description</th>
                <th scope="col" className="text-center">Duration (min)</th>
                <th scope="col" className="text-center">Difficulty</th>
                <th scope="col" className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout, index) => (
                <tr key={workout.id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <span className="badge badge-primary">{workout.name}</span>
                  </td>
                  <td>{workout.description}</td>
                  <td className="text-center">
                    <span className="badge bg-info">{workout.duration_minutes} min</span>
                  </td>
                  <td className="text-center">
                    <span className={`badge ${getDifficultyBadgeClass(workout.difficulty)}`}>
                      {workout.difficulty}
                    </span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-outline-primary">Start</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Workouts;
