import { Link } from "react-router-dom"
export default function Navbar(){
    return (
        <>
       
        <Link to ='/Register' className="navbar">
  Register
  
</Link>
<Link to ='/Login' className="navbar">
  Login
 
</Link>
<Link to = '/Books' className="navbar">
  Books
 
</Link>
<Link to = '/Reserve' className="navbar">
  Reserve
  
</Link>
{/* <Link to = '/ReservedBooks' className="navbar">
  Reserved books
 
</Link> */}
<Link to = '/Profile' className="navbar">
  Profile/books checked out
  
</Link>
<Link to = '/Return' className="navbar">
  Return
  
</Link>
     
       
        </>
    )
}