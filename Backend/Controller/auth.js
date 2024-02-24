const Users = require('../Model/auth.model')


// exports.login = async(req, res) =>{
//     try{
        
//     }
// }


exports.register = async(req, res) => {
    try {
        res.json(req.body)
        const SaveUser = await Users(req.body).save();
    } catch(err){console.log(err)}

}