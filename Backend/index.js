import express from 'express';
import mongoose  from 'mongoose';
import appRoutes from './routes/appRoutes.js'
import cors from 'cors'

const app = express();
const PORT = 3000;
const URL = 'mongodb://127.0.0.1:27017/contactlist';
const URL2 = 'mongodb+srv://nodetut:nodeaccess@cluster0.yasfu.mongodb.net/contacts?retryWrites=true&w=majority';


app.use(express.json());
app.use(cors());

mongoose.connect(URL2, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err));

const con = mongoose.connection;

con.on('open', () =>{
    console.log('Second database connection passed');
});

con.on('error', () => {
    console.log('Connection failed');
})

app.listen(PORT, () => console.log(`Server running on port:${PORT}`))

app.use('/api', appRoutes);

