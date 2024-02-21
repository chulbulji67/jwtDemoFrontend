import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const navigate = useNavigate();
    const [loginDetails, setLoginDetals] = useState({ email: "", password: "" })

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("Working");
        axios.post("http://localhost:9090/auth/login", loginDetails)
          .then(response => {
            console.log("Response from backend:", response.data);
            const token = response.data.jwtToken; 
            localStorage.setItem('token', token);
            console.log(localStorage.getItem("token"));
            setIsLoggedIn(true); 
            // Update state or perform other actions based on the response
            navigate('/home');
          })
          .catch(error => {
            console.error("Error:", error);
            // Handle errors here
          });
      };
      

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginDetals({ ...loginDetails, [name]: value });
        console.log(loginDetails.email);
        console.log(loginDetails.password);
    }

    return (
        <div className="max-w-xs mx-auto">
        <div className='text-xl flex justify-center'><h1>Login</h1></div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" placeholder='Email' value={loginDetails.email} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 my-2" />
          <input type="password" name="password" placeholder='Password' value={loginDetails.password} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 my-2" />
          <button type='submit' className="w-full bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">Login</button>
        </form>
      </div>
      
    );
}
