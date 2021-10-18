import express from 'express'
import {addContact, getContact, getOneContact, deleteContact, updateContact} from '../controllers/contacts.js'
import {login} from '../controllers/login.js'
import {register} from '../controllers/register.js'

const router = express.Router();

//Add contact
router.post('/contact', addContact);

//Get all contacts
router.get('/contacts', getContact);

//Get single contact
router.get('/contact/:id', getOneContact);

//Delete Contact
router.delete('/contact/:id', deleteContact);

//Update Contact
router.put('/contact/:id', updateContact)

//Login route
router.post('/login', login)

//Register route
router.post('/register', register)


export default router