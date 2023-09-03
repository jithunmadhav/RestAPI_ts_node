import dbconnect from "../dbConnection";

export const getUser = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM sample';
    dbconnect.query(query, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
