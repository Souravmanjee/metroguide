const connect=require ('../models/connections')
const station=require('../models/stations')
const mp=require ('../models/map')
const server = require ('express')
const app=server()


app.post('/addconnection', apicall);


function indexof(a,station){
    
    for(let i=0;i<station.length;i++){
        
        if(a===station[i].stations){
            // console.log("test");
            return i;
        }
    }

}


async function apicall(req,res){
   
    const data=req.body;
    try {
        const connection=new connect(data);
        await connection.save();
        
        const mapp = await createmap();
        // console.log(mapp);
        const id = "68029f9137b3d3732d699890";
        const newMap=await  mp.findOne({_id:id});
        newMap.distancemap =mapp;
        await newMap.save();
        
        // await connectionliist();
        res.json("data saved successfully");
    } catch (error) {
        res.json(error);
    }
}

async function createmap(){
    let lst;
    let tation;
    let matrix = [];
    try {
        tation = await station.find();
        const n=tation.length;
        //    const n = 4;
           
           for (let i = 0; i < n; i++) {
               matrix.push(new Array(n).fill(0));
           }
         
    } catch(error){
        console.log(error);
    }
   

    try {
        const liist=await connect.find();
        // console.log(liist);
        lst=liist;
    }
    catch(error){
        console.log(error);
    }
//   console.log(lst);  
for(let i = 0; i<lst.length;i++){
    let a=lst[i].sourcestation;
    let b=lst[i].destinationstation;
    let c=lst[i].distance;
    
    let indexa=indexof(a,tation);
    let indexb=indexof(b,tation);
    
    matrix[indexa][indexb]=c;
    matrix[indexb][indexa]=c;
    
}
console.log(matrix);


return matrix;
}                       

module.exports=app;




