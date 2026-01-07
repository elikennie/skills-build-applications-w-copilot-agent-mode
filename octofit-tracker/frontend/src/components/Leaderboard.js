import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        const codespaceUrl = process.env.REACT_APP_CODESPACE_NAME 
          ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`
          : 'http://localhost:8000';
        
        const apiUrl = `${codespaceUrl}/api/leaderboard/`;
        console.log('Fetching Leaderboard from:', apiUrl);
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        console.log('Leaderboard API Response:', data);
        
        // Handle both paginated and plain array responses
        const leaderboardList = data.results || data;
        setLeaderboard(Array.isArray(leaderboardList) ? leaderboardList : []);
        setError(null);
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
        setError('Failed to load leaderboard');
        setLeaderboard([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) return <div className="container mt-5"><p>Loading leaderboard...</p></div>;
  if (error) return <div className="container mt-5"><p className="text-danger">{error}</p></div>;

  return (
    <div className="container mt-5">
      <h2>Leaderboard</h2>
      {leaderboard.length === 0 ? (
        <p>No leaderboard data available.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Points</th>
              <th>Workouts</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={entry.id}>
                <td>{index + 1}</td>
                <td>{entry.user_name || entry.username}</td>
                <td>{entry.points}</td>
                <td>{entry.workout_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Leaderboard;
