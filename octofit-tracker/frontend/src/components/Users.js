import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const codespaceUrl = process.env.REACT_APP_CODESPACE_NAME 
          ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`
          : 'http://localhost:8000';
        
        const apiUrl = `${codespaceUrl}/api/users/`;
        console.log('Fetching Users from:', apiUrl);
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        console.log('Users API Response:', data);
        
        // Handle both paginated and plain array responses
        const usersList = data.results || data;
        setUsers(Array.isArray(usersList) ? usersList : []);
        setError(null);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to load users');
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="container mt-5"><p>Loading users...</p></div>;
  if (error) return <div className="container mt-5"><p className="text-danger">{error}</p></div>;

  return (
    <div className="container mt-5">
      <h2>Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Users;
