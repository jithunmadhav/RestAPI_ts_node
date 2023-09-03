import mysql from 'mysql2'

const dbconnect=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'Jithun@12',
    database:'sample'
})

dbconnect.connect((err)=>{
if(err){
    console.log(err);
}else{
    console.log('DB_CONNECTED');
}
})

export default dbconnect;

