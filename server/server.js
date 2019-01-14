const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

//MODELS
const { User } = require('./models/user');
const { Dish } = require('./models/dish');
const { Product } = require('./models/products');

//MIDDLEWARES
const { auth } = require('./middleware/auth');
const { admin } = require('./middleware/admin');


//PRODUCTS
//BY ARRIVAL 
// /articles?sortBy=createdAt&order=desc&limit=4

//BY SELL
// /articles?sortBy=sold&order=desc&limit=100&skip=5

app.get('/api/product/catalog',(req,res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 100; 
    
    Product.
    find().
    populate('dish').
    sort([[sortBy,order]]).
    limit(limit).
    exec((err,catalog) => {
        if(err) return res.status(400).send(err);
        res.send(catalog);
    });

});

app.get('/api/product/catalog_by_id',(req,res)=> {
    let type = req.query.type;
    let items = req.query.id;

    if (type === "array"){
        let ids = req.query.id.split(',');
        items = [];
        items = ids.map(item => {
            return mongoose.Types.ObjectId(item);
        });
    }

    Product.
    find({'_id':{$in:items}}).
    populate('dish').
    exec((err,docs)=>{
        return res.status(200).send(docs)
    });
});

app.post('/api/product/catalog',auth,admin,(req,res)=> {
    const product = new Product(req.body);

    product.save((err,doc)=> {
        if (err) return res.json({success: false, err});
        res.status(200).json({
            success: true,
            catalog: doc
        });
    });
});

//DISH
app.post('/api/product/dish',auth,admin,(req,res)=> {
    const dish = new Dish(req.body);
    
    dish.save((err,doc) => {
        if (err) return res.json({success: false, err});
        res.status(200).json({
            success: true,
            dish: doc
        });
    });
});

app.get('/api/product/dishes',(req,res)=>{
    Dish.find({},(err,dishes)=>{
        if (err) return res.status(400).send(err);
        res.status(200).send(dishes)
    });
});


//USERS
app.get('/api/users/auth',auth,(req,res)=> {
    res.status(200).json({
        isAdmin: req.user.role === 0 ? false: true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        cart: req.user.cart,
        history: req.user.history
    });
});


app.post('/api/users/register',(req,res)=> {
    const user = new User(req.body);

    user.save((err,doc)=>{
        if(err) return res.json({success: false,err})
        res.status(200).json({
            success: true,
        });
    });
});

app.post('/api/users/login',(req,res)=> {

    User.findOne({'email':req.body.email},(err,user)=> {
        if (!user) return res.json({loginSuccess: false, message: 'Auth failed, email not found'});
        
        user.comparePassword(req.body.password,(err,isMatch)=> {
            if(!isMatch) return res.json({loginSuccess: false, message: 'Wrong password'});

            user.generateToken((err,user)=> {
                if (err) return res.status(400).send(err);
                res.cookie('w_auth',user.token).status(200).json({
                    loginSuccess: true
                });
            });
        });
    });
});

app.get('/api/user/logout',auth,(req,res)=> {
    User.findOneAndUpdate(
        { _id: req.user._id },
        { token:''},
        (err,doc)=> {
            if (err) return res.json({success: false,err});
            return res.status(200).send({
                success: true
            }); 
        });
});

const port = process.env.PORT || 3002;

app.listen(port,()=> {
    console.log(`Server running on ${port}.`)
});
