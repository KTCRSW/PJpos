const Products = require('../Model/products.model');


exports.read = async(req, res) => {
    try{
        const id = req.params.id
        const Producted = await Products.findOne({_id: id}).exec();
        res.json(Producted)
    }catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error')
    }
}

exports.list = async(req, res) => {
    try {
        const Producted = await Products.find({}).exec();
        res.json(Producted)
    } catch(err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

exports.create = async(req, res) => {
    try { 
        console.log(req.body);
        const Producted = await Products(req.body).save();
        res.json(req.body)
    } catch(err){
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

exports.update = async(req, res) =>{
    try {
        const id = req.params.id
        const Producted = await Products.findOneAndUpdate({ _id: id }, req.body, { new: true }).exec();
        res.json(Producted)
    } catch(err){
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

exports.remove = async(req, res) =>{
    try {
        const id = req.params.id;
        const Removed = await Products.findOneAndDelete({ _id: id}).exec();
        res.json(Removed);
    } catch(err){
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}
