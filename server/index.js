const server = require ('express')

const addstations=require ('./routes/addstations')

const gettingstations=require('./routes/getallstations')

const nearbylocation=require('./routes/addnearby')

const getnearby=require('./routes/getnearby')






const app= server()

//middleware
app.use(server.json());





//api
app.use('/api',addstations);  // api is middlepoint

app.use('/api',gettingstations);

app.use('/api',nearbylocation);

app.use('/api',getnearby);








//  connection to mongoDB

require ("./conn/conn")
const serverstart =()=>{
    console.log('server is running on port 3000')
}
app.listen(3000, serverstart);
// name, description, location, img url, map url category