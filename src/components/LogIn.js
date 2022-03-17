// const username = document.getElementById("username") ;
// const email = document.getElementById("email") ;
// const password = document.getElementById("password") ;
import React from 'react'

function LogIn(){
    return (
        <div>
            LOGIN
            <main>
            <form>
                <label for="username">Username</label>
                <input type="text" name="username" id="username"></input>
                <label for="password">Password</label>
                <input type="text" name="password" id="password"></input>
                <button id="addBtn"> Log In</button>
            </form>
        </main>
        </div>
    );
}


export default LogIn;
