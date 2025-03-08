const server = require ('express')

const addstations=require ('./routes/addstations')

const gettingstations=require('./routes/getallstations')






const app= server()

//middleware
app.use(server.json());





//api
app.use('/api',addstations);  // api is middlepoint

app.use('/api',gettingstations);








//  connection to mongoDB

require ("./conn/conn")
const serverstart =()=>{
    console.log('server is running on port 3000')
}
app.listen(3000, serverstart);
// name, description, location, img url, map url category