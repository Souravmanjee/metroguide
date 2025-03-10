const connect=require ('../models/connections')
const station=require('../models/stations')
const server = require ('express')
const app=server()

app.post('/addconnection', apicall);
async function apicall(req,res){
    const data=req.body;
    try {
        const connection=new connect(data);
        await connection.save();
        await createmap();
        // await connectionliist();
        res.json("data saved successfully");
    } catch (error) {
        res.json(error);
    }
}
async function createmap(){
    let tation;
    try {
        tation = await station.find();
        const n=tation.length;
        //    const n = 4;
           const matrix = [];
           for (let i = 0; i < n; i++) {
               matrix.push(new Array(n).fill(0));
           }
           console.log(matrix);
    } catch(error){
        console.log(error);
    }


    try {
        const liist=await connect.find();
        // await liist.save();
        // console.log(liist);
            
        } catch (error) {
            console.log(error);
        }
    const stationname= []
    for(let i=0;i<tation.length;i++){
        // console.log(tation[i]);  
        stationname.push(tation[i].stations);
    }
    console.log(stationname);

}                       

module.exports=app;
