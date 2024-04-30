const BASEURL= 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com'
export async function loginuser(userData) {
    try {
        const response = await fetch(`${BASEURL}/api/users/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: userData.email,
            password: userData.password,
        }),
        });
        const result= await response.json();
        if(result.token)
        localStorage.setItem('token', JSON.stringify(result.token))
        return result;


    } catch (error) {
        
    }

}
export async function registeruser(userData) {
    try {
        const response = await fetch(`${BASEURL}/api/users/register`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstname: userData.firstname,
            lastname: userData.lastname,
            email: userData.email,
            password: userData.password,
        }),
        });
        const result= await response.json();
        if(result.token)
        localStorage.setItem('token', JSON.stringify(result.token))
        return result;


    } catch (error) {
        
    }

}

 export async function reserve(checkout) {
    event.preventDefault();
    const token1=(JSON.parse(localStorage.getItem('token')));
    try{
  const response = await  fetch(`${BASEURL}/api/books/${checkout}`, {
method: "PATCH",
headers: { 
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token1}`, 
  },
body: JSON.stringify({
  available: false,
})
})}catch(error){}
//  const result = await response.json();
}

export async function getMe (token){
    const token1=(JSON.parse(localStorage.getItem('token')));
    try {
        const response = await fetch(`${BASEURL}/api/users/me`,{
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token1}`, 
              },   
        });
        // console.log(token1);
        const result = await response.json();
        // console.log(result);
        return result;
    } catch (error) {
        console.log(error)
    }
}