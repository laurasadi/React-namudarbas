import React from 'react';
import Book from '../book/Book';

export default function BookList (){
    return(
        <div className="bookList">
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </div>
    )
}