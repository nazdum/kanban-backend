/**
 * Import node modules
*/
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

/**
 * Import routes 
*/
const TaskRouter = require('./src/api/entities/tasks/task.routes')
const UserRouter = require('./src/api/entities/user/user.routes')


/**
 * SetUp 
*/
dotenv.config()
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
        console.log(`Server on port: ${app.get('port')}`)
        const db = require('./src/database/database')
    }
)

module.exports = { server, app }
