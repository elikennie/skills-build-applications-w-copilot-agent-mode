import React, { useState, useEffect } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.REACT_APP_CODESPACE_NAME 
          ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
          : 'http://localhost:8000/api/teams/';
        console.log('Fetching Teams from:', apiUrl);
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        console.log('Teams API Response:', data);
        
        // Handle both paginated and plain array responses
        const teamsList = data.results || data;
        setTeams(Array.isArray(teamsList) ? teamsList : []);
        setError(null);
      } catch (err) {
        console.error('Error fetching teams:', err);
        setError('Failed to load teams');
        setTeams([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading teams...</p>
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
      <h2 className="section-title">👥 Teams</h2>
      
      {teams.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🤝</div>
          <h4>No Teams Found</h4>
          <p className="text-muted">Create a team and invite your friends to compete together!</p>
          <button className="btn btn-primary mt-3">Create New Team</button>
        </div>
      ) : (
        <div>
          <div className="data-grid">
            {teams.map((team) => (
              <div key={team.id} className="card">
                <div className="card-header">
                  <h5 className="mb-0">{team.name}</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">{team.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="badge bg-info">{team.member_count || 0} Members</span>
                    <button className="btn btn-sm btn-outline-primary">View Team</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Teams;
