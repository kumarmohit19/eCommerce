module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Mohit@19",
    DB: "ecom_db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acuire: 30000, //max time in ms that a pool will try to get connection before throwing error
        idle: 10000  // maximum time in ms that a connection can be idle before being released
    }
}