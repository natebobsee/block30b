/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useEffect, useState } from "react";
export default function Books() {
  const [booksArray, setBooksArray] = useState([]);
  useEffect(()=>{
      async function fetchBooks(){
        try {
          const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books')
      const result = await response.json();
      setBooksArray(result.books)
        } catch (error) {
          console.log(error)
        }
      }
      fetchBooks();
  },[])
    

          console.log(booksArray);
         


    return (
        <>
        {booksArray.map((result)=>{
            return(<div className = 'book' key={result.id}>
                <p>{result.title} </p>
                <p>book id# {result.id}</p>
                <p>{result.description}</p>
                {/* <p>{result.coverimage}</p> */}
                {/* {console.log(results)} */}
            </div>)
        })}
        </>
     )
//      ;
}