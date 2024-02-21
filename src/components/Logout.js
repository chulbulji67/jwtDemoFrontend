import React from 'react';

export default function Logout() {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    // Perform any other logout-related actions here, such as redirecting to the login page
    window.location.href = '/login'; // Redirect to the login page
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
