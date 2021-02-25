const NeDB = require('nedb-promise')
const bcrypt = require('bcryptjs')
const users = new NeDB({filename:'database/users.db', autoload: true})
const jwt = require('jsonwebtoken')

async function validate(body){
    let user = await users.findOne({email:body.email})
    let result = {error:false, messages:[]}
    if(user){
        result.error = true
        result.messages.push("Email already exists")
    }else if(body.password != body.repeatPassword){
        result.error = true
        result.messages.push("Passwords does not match")
    }
    return result       
}

function format(body){
    let {email,name,adress,password} = body;

    return {
        email,name,adress,
        role: 'customer',
        password: bcrypt.hashSync(password, 10),
        orderHistory: []
    }
}

module.exports = {
    async create(body){
        let validation = await validate(body)
        if(!validation.error){            
            let document = format(body)
            await users.insert( document )    
        }
        return validation
    },

    all(){

    },
    
    async findOneBy(props){
        return await users.findOne(props)
    },

    async findOne(_id){
        return await users.findOne({_id})
    },

    async authenticate(email, password){
        if(!email || !password){
            return {error:true, message:"Invalid Credentials"}
        }
        let user = await module.exports.findOneBy({email})
        if(!user){
            return {error:true, message:"Invalid Credentials"}
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if(passwordMatch){
            let token = await jwt.sign({
                id:user._id,
                exp: Math.floor(Date.now() / 1000) + (60 * 60)
            }, 'secret')

            const {email,name,role,adress} = user
            const userData = {email,name,role,adress}

            return {error:false, token, userData }
        }else{
            return {error:true, message:"Invalid Credentials"}
        }
    },

    async verifyToken(token){
        await jwt.verify(token, 'supersecret')
    },

    async addOrderToUser(order, user){
        await users.update({_id:user._id}, {$push:{orderHistory:order._id}})
    }
}
