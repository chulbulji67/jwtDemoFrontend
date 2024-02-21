import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function AddBook() {
    const [bookName, setBookName] = useState('');
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');
    const requestBody = {
        bookName: bookName,
        users: [{ id: userId }]
    };

    axios.post('http://localhost:9090/books', requestBody, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        console.log('Response:', response.data);
        // Handle response here
        navigate("/")
    }).catch(error => {
        console.error('Error:', error);
        // Handle error here
    });
};

  return (
   
    <div>
    <form onSubmit={handleSubmit}>
        <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} placeholder="Enter Book Name" />
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Enter User ID" />
        <button type="submit">Submit</button>
    </form>
</div>
  )
}
