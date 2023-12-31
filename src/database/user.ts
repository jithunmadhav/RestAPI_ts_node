import dbconnect from "../config/dbConnection";

export const getUser = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM user';
    dbconnect.query(query, (err, data) => {
      if (err)  reject(err);
       else  resolve(data);
    });
  });
};


export const createUser=(email:string,username:string,password:string)=>{
    return new Promise((resolve, reject) => {
        let query='INSERT INTO user (email, password, username) VALUES (?, ?, ?)'
        dbconnect.query(query,[email,password,username],(err,data)=>{
            if(err) reject(err)
            else resolve(data)
        })
    })
    
}

export const updateUser=(email:string,username:string,password:string)=>{
  return new Promise((resolve, reject) => {
    let query='update user set username=?,password=? where email=?'
    dbconnect.query(query,[username,password,email],(err,data)=>{
      if(err) reject(err)
      else  resolve(data)
    })
  })
  
}

export const getDetails=(email:string)=>{
  return new Promise((resolve, reject) => {
    let query='select * from user where email=?'
    dbconnect.query(query,[email],(err,data)=>{
      if(err) reject(err)
      else  resolve(data)
    })
  })
  
}