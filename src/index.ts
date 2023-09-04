import express from 'express';
import 'dotenv/config';
import { createUser, getUser, updateUser } from './database/user';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', async (req, res) => {  
  try {
    let result = await getUser();  
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/user',(req,res)=>{
  const {email,username,password}:{email:string; username:string; password:string}=req.body;
  if(! email || !username || !password){
    return res.status(400).json('error')
  }
  createUser(email,username,password).then((result)=>{
  res.status(200).json('successfull')
  }).catch((err)=>{
    console.log(err);
  })
})

app.put('/update',(req,res)=>{
  const {email,username,password}:{email:string,username:string,password:string}=req.body;
  updateUser(username,password,email).then((result)=>{
    res.status(200).json({result,message:'update successfull'})
  }).catch((err)=>{
    res.status(500).json({message:'error',err})
  })
})

app.listen(4000, () => {
  console.log('http://localhost:4000');
});
