import { useState, useEffect } from "react";
import { getMe } from "./api";
export default function Profile (){
    const [user, setUser]= useState([]);
    const [token] = useState(JSON.parse(localStorage.getItem('token')));
    useEffect(()=>{
        async function getuser(token) {
            const loggeduser = await getMe(token);
            setUser(loggeduser)
            console.log(loggeduser)
        }
        getuser();
    },[token])

 return (<>
 
 <div>First name: {user.firstname}</div>
 <div>Last name: {user.lastname}</div>
 <div>email: {user.email}</div>
 {user?.books && 
 user.books.map((book)=>{
     return( <h3 key = {book.id}>{book.title} id #{book.id}</h3>
     )
 })}
 
 
 </>)

}