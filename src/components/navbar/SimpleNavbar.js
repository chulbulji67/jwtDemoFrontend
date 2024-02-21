import React, { useState } from 'react'

export default function SimpleNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
    localStorage.removeItem('token'); // Remove token from localStorage
};

  return (
    <div className="flex bg-gray-300 h-12 text-black justify-between items-center text-xl ">
    <div className='mx-2'><a href="/">Book</a></div>
    <div className='mx-2'>
        <ul className="flex space-x-4">
            <li><a href="/about">About</a></li>
            <li><a href="/add-book">Add books</a></li>
            {isLoggedIn ? ( // If user is logged in
                <li><button onClick={handleLogout}>Logout</button></li>
            ) : ( // If user is not logged in
                <>
                    <li><a href="/login">Sign In</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                </>
            )}
        </ul>
    </div>
</div>
  )
}
