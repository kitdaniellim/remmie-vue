module.exports = {
    authentication: {
        jwtSecret: 'thisisasecretmessage'
    },
    "development": {
      "username": "root",
      "password": null,
      "database": "remmie_web",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "seederStorage": "sequelize"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
}