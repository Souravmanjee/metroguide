const db=require ('mongoose')
const connection = "mongodb+srv://hunterbaaba:Sourhub@metroguide.rj7cz.mongodb.net/?retryWrites=true&w=majority&appName=Metroguide"

db.connect(connection,{}).then(callbck).catch(errorfun);
function errorfun(error){
    console.log(error);
}
function callbck(){
    console.log("mongoDB connected")
}
