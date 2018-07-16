module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["test"] = {
        host: "35.237.63.47",
        port: "3306",
        user: "mysql.sys",
        password: process.env.Password_sqltest,
        database: "information_schema"
    };
};