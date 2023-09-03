import dbconnect from "../config/dbConnection";

export const getUser = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM user';
    dbconnect.query(query, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};


export const createUser=(email:string,username:string,password:string)=>{
    return new Promise((resolve, reject) => {
        let query='INSERT INTO user (email, password, username) VALUES (?, ?, ?)'
        dbconnect.query(query,[email,username,password],(err,data)=>{
            if(err) reject(err)
            else resolve(data)
        })
    })
    
}