import React, { useEffect, useState } from 'react'
import users from './users';
function UserDetails({userId}) {
    const [currentUser,setCurrentUser] = useState("");
    useEffect(()=>{
        setTimeout(()=>{
            users.map((user)=>{
                if(user.id == Number(userId)){
                    setCurrentUser(user);
                }
            })
        }, 700)
    }, []);
    // 
  return (
    <div>
        {
            currentUser === "" ? (
                <div>
                    Loading...
                </div>
            ):(
                <div>
                    <h1>User Details</h1>
                    <p><b>Name: </b>{currentUser.name}</p>
                    <p><b>Username: </b>{currentUser.username}</p>
                    <p><b>Email: </b>{currentUser.email}</p>
                    <p><b>Phone: </b>{currentUser.phone}</p>
                    <p><b>Website: </b>{currentUser.website}</p>
                </div>
            )
        }
    </div>
  )
}

export default UserDetails;
