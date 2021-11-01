import Users from '../models/users.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    Users.findOne({email})
        .then(user => {
            if(!user){
                return res.status(400).json({msg: "User does not exist"})
            }else{
                bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) {
                        return res.status(400).json({ msg: 'Invalid credentials'});
                    }else{
                        jwt.sign({user: user}, 'secretkey', {expiresIn: '30h' }, (err, token) => {
                            res.json({
                                user : {
                                    username: user.username
                                },
                                token:token
                            })
                        })
                    }
                })      
            }
        })
}