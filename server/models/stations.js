const db = require ('mongoose')

const usr = new db.Schema({
    stations:{
        type:String
    },
    linecolor:{
        type:String
    }
    

})
const user = new db.model("Stations",usr);
module.exports=user