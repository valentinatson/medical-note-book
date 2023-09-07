import style from"./Login.module.css"
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () =>{


    let [emailInput, setEmailInput] = useState("");
    let [pwdInput, setPwdInput] = useState("");


    const navigate = useNavigate()
    return(
        
        <div>

            <h1>CONNECTION</h1>

        <form
        onSubmit={(e) => {
            e.preventDefault();
            let loginInfo = {
            email: emailInput,
            password: pwdInput
            };
            console.log(loginInfo);

            axios
            .post("http://localhost:5000/patient/login", loginInfo)
            .then((res) => {
                console.log(res.data);
                navigate("/menu1")
            })
            .catch((error) => {
                console.log(error);
            });
        }}
        
        >

            <div>
            <label htmlFor="email">Email: </label>
            <input type="text" name="" id="email"onInput={(e) => {
                    setEmailInput(e.target.value);
                  }}/><br />
            </div>
            

            <div>
            <label htmlFor="password">Mot de passe: </label>
            <input type="password" name="" id="pwd"onInput={(e) => {
                    setPwdInput(e.target.value);
                  }}/><br />
            </div>
            
            
            
            <div>
            <button type="submit">Connecter</button>
            </div>
        </form>

        </div>
    )
}

export default Login