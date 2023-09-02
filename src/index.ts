import dbconnect from './dbConnection';
import express from 'express'

const app=express()

app.get('/',(req,res)=>{

    dbconnect.query('SELECT * FROM sample', (error, results, fields) => {
        if (error) {
          console.error(error);
        } else {
          console.log(results);
          res.json(results)
        }
      });
})
app.listen(4000,()=>{
    console.log('http://localhost:4000');
})