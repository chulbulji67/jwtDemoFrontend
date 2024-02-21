import React, { useEffect , useState} from 'react'
import axios from 'axios';

export default function Home() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
      
        

       const token = localStorage.getItem("token");
       console.log(token);

        axios.get("http://localhost:9090/books", {
            headers: {
              Authorization: `Bearer ${token}` // Set the token in the Authorization header
            }
          }).then(bookResponse => {
            console.log("Books:", bookResponse.data);
            setBooks(bookResponse.data); // Set the list of books in state
            // Handle book data here
          }).catch(bookError => {
            console.error("Error fetching books:", bookError);
            // Handle errors here
          });
       
      }, []);

      const BookCard = ({ book }) => {
        return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg ml-8">
                <img className="w-full" src="data:image/jpeg;base64,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" alt={book.bookName} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{book.bookName}</div>
                    {/* Additional book details can be displayed here */}
                </div>
            </div>
        );
    };

  return (
    <div className="grid grid-cols-3 gap-4">
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
  )
}
