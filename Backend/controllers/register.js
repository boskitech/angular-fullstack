import Users from '../models/users.js'

export const register = (req, res) => {
    let newUser = new Users({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    newUser.save((err, user) => {
        if(err){
            res.json(err)
        }else{
            res.json({msg:'User added', payload: user})
        }
    });
}