// import { Pool } from 'pg';

// const pool = new Pool({
//     user:'',
//     host:'',
//     database:'',
//     password:'',
//     port:5432,
// });

// export default pool;

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('test_database', 'user', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((error) => console.error('Unable to connect to the database:', error));
  
export default sequelize;