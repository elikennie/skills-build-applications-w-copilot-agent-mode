import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.REACT_APP_CODESPACE_NAME 
          ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
          : 'http://localhost:8000/api/leaderboard/';
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

  const getMedalEmoji = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return '⭐';
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading leaderboard...</p>
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
      <h2 className="section-title">🏆 Leaderboard</h2>
      
      {leaderboard.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🎯</div>
          <h4>No Leaderboard Data Available</h4>
          <p className="text-muted">Start competing to appear on the leaderboard!</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col" className="text-center">Rank</th>
                <th scope="col">User</th>
                <th scope="col" className="text-center">Points</th>
                <th scope="col" className="text-center">Workouts</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, index) => {
                const rank = index + 1;
                const medal = getMedalEmoji(rank);
                return (
                  <tr key={entry.id}>
                    <td className="text-center">
                      <span className="badge bg-info">{medal} #{rank}</span>
                    </td>
                    <td>
                      <strong>{entry.user_name || entry.username}</strong>
                    </td>
                    <td className="text-center">
                      <span className="badge bg-warning text-dark">{entry.points} pts</span>
                    </td>
                    <td className="text-center">
                      <span className="badge bg-success">{entry.workout_count}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
