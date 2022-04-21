module.exports = {
  development: {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Mohit@19",
    DB: "ecom_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acuire: 30000, //max time in ms that a pool will try to get connection before throwing error
      idle: 10000, // maximum time in ms that a connection can be idle before being released
    },
  },
  production: {
    HOST: "relevel-ecommerce.cvyl0jb1nhb0.ap-south-1.rds.amazonaws.com",
    USER: "relevel",
    PASSWORD: "Ecommerce#2021",
    DB: "ecom_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acuire: 30000, //max time in ms that a pool will try to get connection before throwing error
      idle: 10000, // maximum time in ms that a connection can be idle before being released
    },
  },
}
