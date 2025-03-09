const connect=require ('../models/connections')
const server = require ('express')
const app=server()

app.post('/addconnection', apicall);
async function apicall(req,res){
    const data=req.body;
    try {
        const connection=new connect(data);
        await connection.save();
        res.json("data saved successfully");
    } catch (error) {
        res.json(error);
    }
}
module.exports=app;
