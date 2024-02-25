const users = require('../Model/auth.model')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config();

exports.register = async (req, res) => {
    try {
        const Saltrounds = process.env.SALTROUNDS;
        const hashPassword = await bcrypt.hash(req.body.password, parseInt(Saltrounds))
        const { username, email } = req.body;

        const addUser = new users({
            "username": username,
            "email": email,
            "password": hashPassword
        })

        const SaveUser = await addUser.save();
        res.status(200).json({
            "success": true,
            "message": "Register Successfully"
        });
    } catch (err) { console.log(err) }

}


exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const getUser = await users.findOne({ username: username }).exec();

        if (getUser) {
            const matchPassword = await bcrypt.compare(password, getUser.password);
            const token = jwt.sign({ username: username}, process.env.SECRET, {
                expiresIn: "1h",
            })
            if (matchPassword) {
                
                res.status(200).json({
                    "success": true,
                    "message": "Login Successfully",
                    "token": token
                })
            } else {
                res.status(500).json({
                    "status": false,
                    "message": "Login Failled"
                })
                res.json(getUser);
            }
        } else {
            res.status(500).json({
                "status": false,
                "message": "Login Failled"
            })
            res.send(getUser);
        }
    } catch (error) {
        res.status(500).json({
                "failed": false,
                "message": "Login Failled",
            })
    }
}

function VerifyToken(req, res, next){
    const token = req.headers["Authorization"]
    if(typeof token !== "undefined"){
        jwt.verify(token, process.env.SECRET, (err, authData)=>{
            if(err){
                res.sendStatus(403)
            } else {
                next();
            }
        })
    } else [
        res.sendStatus(403)
    ]
}

exports.listUser = VerifyToken, async (req, res) =>{
    try {
        const AllUsers = await users.find({}).exec();
        res.json(AllUsers)
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}