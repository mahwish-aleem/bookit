// const username = document.getElementById("username") ;
// const email = document.getElementById("email") ;
// const password = document.getElementById("password") ;
import React from 'react'

function SignUp(){
    return (
        <div>
            SIGN UP
            <main>
            <form>
                <label for="username">Username</label>
                <input type="text" name="username" id="username"></input>
                <label for="email">Email</label>
                <input type="text" name="email" id="email"></input>
                <label for="password">Password</label>
                <input type="text" name="password" id="password"></input>
                <button id="addBtn"> Sign Up</button>
            </form>
        </main>
        </div>
    );
}


export default SignUp;
