import style from"./Signup.module.css"
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () =>{

    let [nameInput, setNameInput] = useState("");
    let [emailInput, setEmailInput] = useState("");
    let [pwdInput, setPwdInput] = useState("");
    let [telInput, setTelInput] = useState("");
    let [villeInput, setVilleInput] = useState("");

    const navigate = useNavigate()
    return(
        
        <div>

            <h1>INSCRIPTION</h1>

        <form
        onSubmit={(e) => {
            e.preventDefault();
            let signupInfo = {
            name: nameInput,
            email: emailInput,
            tel:telInput,
            password: pwdInput,
            ville:villeInput,
            };
            console.log(signupInfo);

            axios
              .post("http://localhost:5000/hospital/signup", signupInfo)
              .then((res) => {
                console.log(res.data);
                navigate("/login")
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        
        >
            <div>
            <label htmlFor="name">Nom: </label>
            <input type="text" name="" id="name"onInput={(e) => {
                    setNameInput(e.target.value);
                  }}/><br />
            </div>


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
            <label htmlFor="tel">Tel: </label>
            <input type="number" name="" id="tel"onInput={(e) => {
                    setTelInput(e.target.value);
                  }}/><br />
            </div>


            <div>
            <label htmlFor="ville">Ville: </label>
            <input type="text" name="" id="ville"onInput={(e) => {
                    setVilleInput(e.target.value);
                  }}/><br />
            </div>
            
            
            
            <div>
            <button type="submit">S'inscrire</button>
            </div>
        </form>

        </div>
    )
}

export default Signup

