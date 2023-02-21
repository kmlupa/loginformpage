const express=require ("express");
const mongoose = require("mongoose");
var cors = require("cors");
const app=express()
//cors configuration
app.use(cors());

//json conversion
app.use(express.json());


mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/myLoginRegisterDB", {useNewUrlParser: true} ,{useUnifiedTopology: true},
{useCreateIndex: true},);

const Schema=mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    },
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

app.listen(3002,() => {
    console.log("BE started at port 3002")
})