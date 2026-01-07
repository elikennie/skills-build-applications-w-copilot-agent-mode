import React, { useState, useEffect } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        setLoading(true);
        const codespaceUrl = process.env.REACT_APP_CODESPACE_NAME 
          ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`
          : 'http://localhost:8000';
        
        const apiUrl = `${codespaceUrl}/api/workouts/`;
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

  if (loading) return <div className="container mt-5"><p>Loading workouts...</p></div>;
  if (error) return <div className="container mt-5"><p className="text-danger">{error}</p></div>;

  return (
    <div className="container mt-5">
      <h2>Workouts</h2>
      {workouts.length === 0 ? (
        <p>No workouts found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Duration (min)</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout) => (
              <tr key={workout.id}>
                <td>{workout.id}</td>
                <td>{workout.name}</td>
                <td>{workout.description}</td>
                <td>{workout.duration_minutes}</td>
                <td>{workout.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Workouts;
