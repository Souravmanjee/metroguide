const server = require ('express')

const addstations=require ('./routes/addstations')

const gettingstations=require('./routes/getallstations')

const nearbylocation=require('./routes/addnearby')

const getnearby=require('./routes/getnearby')

const addconnection=require('./routes/addconnection')

const getconnection=require('./routes/getconnection')

const findpath=require('./routes/findpath')


const app= server()

// //middleware
app.use(server.json());





// //api
app.use('/api',addstations);  // api is middlepoint

app.use('/api',gettingstations);

app.use('/api',nearbylocation);

app.use('/api',getnearby);

app.use('/api',addconnection);

app.use('/api', getconnection);

app.use('/api',findpath);






// //  connection to mongoDB

require ("./conn/conn")
const serverstart =()=>{
    console.log('server is running on port 3000')
}
app.listen(3000, serverstart);
// name, description, location, img url, map url category