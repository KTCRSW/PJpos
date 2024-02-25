const users = require('../Model/auth.model')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv');
dotenv.config();

exports.register = async (req, res) => {
    try {
        const Saltrounds = process.env.SALTROUNDS;
        const hashPassword = await bcrypt.hash(req.body.password, parseInt(Saltrounds))
        const { username , email } = req.body;

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