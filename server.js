/**
 * Import node modules
*/
const express = require('express');
const dotenv = require('dotenv'); dotenv.config()
const morgan = require('morgan');

/**
 * Import routes 
*/
const TaskRouter = require('./src/api/entities/tasks/task.routes')
const UserRouter = require('./src/api/entities/user/user.routes')


/**
 * SetUp 
*/
const { startConnection } = require('./src/api/database/database')
const app = express();
app.set('port', 5000 || process.env.PORT);

/**
 * Middlewares
*/
app.use(morgan('dev'))
app.use(express.json())

/**
 * Routes 
*/
app.use("/task", TaskRouter)
app.use("/user", UserRouter);

/**
 * Server  
*/
const server = app.listen(
    app.get('port'),
    () => {
        console.log(`Server running on port: ${app.get('port')} \n***${process.env.NODE_ENV} mode***`)
        startConnection()
    }
)

module.exports = { app, server }
