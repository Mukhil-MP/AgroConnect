//const User = require('./user');
const app = require('./app');
const db = require('./config/db')
const farmerModel = require('./model/farmerModel');
const officerModel = require('./model/officerModel');
const memberModel = require('./model/memberModel');


const port = 3000;

app.get('/',(req,res)=>{
    res.send("hello world");
});

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});