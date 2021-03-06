import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const {books} = useContext(BookContext)
    return ( 
        <div className="navbar">
            <h1>Hello Reading Book List</h1>
            <p>Current you have {books.length} books to get through ...</p>
        </div>
     );
}
 
export default Navbar; 