const server = require ('express')
const app= server()
const serverstart =()=>{
    console.log('server is running on port 3000')
}
app.listen(3000, serverstart);
// name, description, location, img url, map url category