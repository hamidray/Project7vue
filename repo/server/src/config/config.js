
module.exports = {
   port: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME || 'tab_traker_app',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'Dibraksta1$',
        options: {
           dialect: process.env.DIALECT || 'mysql',
           host: process.env.HOST || 'localhost',
            storage: './tab_traker_app.mysql',
            pool: {
                  max: 5,
                  min: 0,
                  acquire: 30000,
                  idle: 10000
             }
        }
    },
    authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
    
   } 
      
}
