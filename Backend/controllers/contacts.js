import Contact from '../models/contacts.js'
import jwt  from 'jsonwebtoken';

//Add contact --------------------------------------------
export const addContact = (req, res) => {
        let newContact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    });

    newContact.save((err, contacts) => {
        if(err){
            res.json(err)
        }else{
            res.json({msg:'Contact added', payload: contacts})
        }
    });
}

//Get Contacts ----------------------------------------------
export const getContact = (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403)
        }else{
            Contact.find((err, contacts) => {
                res.json(contacts);
            })
            
        }
    })
}

//Get One contact ---------------------------------------------
export const getOneContact = (req, res) => {
    Contact.findById({_id: req.params.id}, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    })
}


//Delete Contact ---------------------------------------------------
export const deleteContact = (req, res) => {
    Contact.deleteOne({_id: req.params.id}, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    });
}

//Update Contact -------------------------------------------
export const updateContact = (req, res) => {
    const id = {_id: req.params.id};
    let contactUpdate = ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    });

    Contact.updateOne(id, contactUpdate).then( err => {
        if(err){
            res.json(err)
        }else{
            res.json({msg:'Contact updated', payload: contacts})
        }
    });
}