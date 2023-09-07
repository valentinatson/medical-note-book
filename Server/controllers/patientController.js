const dataBase = require('../config/mysql')
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")


exports.signup = (req,res) => {

console.log(req.body);
    let insertPatientQuery = "INSERT INTO patient (name_patient,surname_patient ,email_patient ,tel_patient ,password_patient,sex_patient,adresse_patient,ville_patient,birthdate_patient) VALUES(?,?,?,?,?,?,?,?,?)"
    



    bcrypt
    .hash(req.body.password, 5)
    .then((hash) => {
        dataBase.query(
            insertPatientQuery,
            [req.body.name ,req.body.surname,req.body.email,req.body.tel, hash,req.body.sex,req.body.adresse,req.body.ville,req.body.birthdate ],
            (error, result)=>{
                if (error) {
                    res.status(401).json(error)
                }
                res.status(201).json({hash, result})
            } 
        ) 
        
        
        
    })
    .catch((error) => {
        res.status(500).json(error)
    })
    

}





exports.login = (req,res) => {
    console.log(req.body); 

    let selectPatientQuery = "SELECT * from patient WHERE email_patient =? ";
    dataBase.query(selectPatientQuery,[req.body.email], (error, result) => {
        //error? res.json(error) : res.status(200).json(result) 

        if(error){
            // query not executed due to server error
            res.status(500).json(error)
        } 
        if(result.length > 0){
            //user found
            bcrypt.compare(req.body.password,result[0].password_patient)
            .then((valid) => { 
                if(valid){
                    //valid password
                    let accessToken = jwt.sign(
                        {patient_id : result[0].id_patient},"12345678",{expiresIn: "15h"}
                    )
                    //res.status(200).json("c'est parfait")
                    res.status(200).json("voila")
                }else{
                    //invalid password
                    res.status(401).json({error:"incorrect password"})
                }
            })
            .catch((error) => res.status(500).json("au nivau du catch"))
        }else{
            //user not found
            res.status(401).json({error:"user not found"})
        }
    })
}