import React, { useState } from 'react'
import { isUserLoggedIn } from '../../service/AuthService';




export default function SimpleNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogout = () => {
    // Perform logout logic here
   console.log("Working")
    setIsLoggedIn(false);
    
    localStorage.removeItem('token'); // Remove token from localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("roles");
    isUserLoggedIn() 
    window.location.href = '/login';
};

  return (
    <div className="flex bg-gray-300 h-16 text-black justify-between items-center text-xl px-4">
    <div className='text-xl font-bold'><a href="/">Book</a></div>
    <div>
        <ul className="flex space-x-4">
            <li><a href="/about">About</a></li>
            {
              (localStorage.getItem("role") != null 
              && localStorage.getItem("role") === "ROLE_ADMIN") 
              && <li><a href="/add-book">Add Books</a></li>
            }
            
            {isUserLoggedIn() ? ( // If user is logged in
                <li><button className="text-gray-800 hover:text-indigo-600" onClick={handleLogout}>Logout</button></li>
            ) : ( // If user is not logged in
                <>
                    <li><a href="/login" className="text-gray-800 hover:text-indigo-600">Sign In</a></li>
                    <li><a href="/signup" className="text-gray-800 hover:text-indigo-600">Sign Up</a></li>
                </>
            )}
        </ul>
    </div>
</div>
  )
}
