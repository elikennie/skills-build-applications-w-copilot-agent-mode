import React, { useState, useEffect } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        const codespaceUrl = process.env.REACT_APP_CODESPACE_NAME 
          ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`
          : 'http://localhost:8000';
        
        const apiUrl = `${codespaceUrl}/api/teams/`;
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

  if (loading) return <div className="container mt-5"><p>Loading teams...</p></div>;
  if (error) return <div className="container mt-5"><p className="text-danger">{error}</p></div>;

  return (
    <div className="container mt-5">
      <h2>Teams</h2>
      {teams.length === 0 ? (
        <p>No teams found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.id}>
                <td>{team.id}</td>
                <td>{team.name}</td>
                <td>{team.description}</td>
                <td>{team.member_count || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Teams;
