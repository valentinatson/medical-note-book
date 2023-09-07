import style from"./Signup.module.css"
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () =>{

    let [nameInput, setNameInput] = useState("");
    let [surnameInput, setSurnameInput] = useState("");
    let [emailInput, setEmailInput] = useState("");
    let [pwdInput, setPwdInput] = useState("");
    let [telInput, setTelInput] = useState("");
    let [paysInput, setPaysInput] = useState("");
    let [villeInput, setVilleInput] = useState("");
    let [adresseInput, setAdresseInput] = useState("");
    let [dateInput, setDateInput] = useState("");
    let [selectedSexe, setSelectedSexe] = useState("");

    const navigate = useNavigate()
    return(
        
        <div>

            <h1>INSCRIPTION</h1>

        <form
        onSubmit={(e) => {
            e.preventDefault();
            let signupInfo = {
            name: nameInput,
            surname: surnameInput,
            email: emailInput,
            tel:telInput,
            password: pwdInput,
            pays:paysInput,
            ville:villeInput,
            adresse:adresseInput,
            birthdate:dateInput,
            sex:selectedSexe
            };
            console.log(signupInfo);

            axios
              .post("http://localhost:5000/patient/signup", signupInfo)
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
            <label htmlFor="surname">Prenom: </label>
            <input type="text" name="" id="surname"onInput={(e) => {
                    setSurnameInput(e.target.value);
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
            <label htmlFor="pays">Pays: </label>
            <input type="text" name="" id="pays"onInput={(e) => {
                    setPaysInput(e.target.value);
                  }}/><br />
            </div>

            <div>
            <label htmlFor="ville">Ville: </label>
            <input type="text" name="" id="ville"onInput={(e) => {
                    setVilleInput(e.target.value);
                  }}/><br />
            </div>
            
            <div>
            <label htmlFor="adresse">Adresse: </label>
            <input type="text" name="" id="adresse"onInput={(e) => {
                    setAdresseInput(e.target.value);
                  }}/><br />
            </div>

            <div>
            <label htmlFor="Date">Date: </label>
            <input type="date" name="" id="Date"onInput={(e) => {
                    setDateInput(e.target.value);
                  }}/><br />
            </div>

            <div>
            <label htmlFor="sexe">Sexe: </label>
            <select name="sexe" id="sexe" required
            onChange={(e) => setSelectedSexe(e.target.value)}>
                <option value="">Sexe</option>
                <option value="masculin">masculin</option>
                <option value="feminin">feminin</option>
            </select> <br />
            {/* <input type="text" name="" id="sexe"onInput={(e) => {
                    setSelectedSexe(e.target.value);
                  }}/><br /> */}
            </div>
            
            <div>
            <button type="submit">S'inscrire</button>
            </div>
        </form>

        </div>
    )
}

export default Signup

