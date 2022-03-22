/**
 * Import node modules
*/
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

/**
 * Import routes 
*/
const TaskRouter = require('./routes/task.routes')
const UserRouter = require('./routes/user.routes')


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

/**
 * Routes 
*/
app.use("/task", TaskRouter)
app.use("/user" , UserRouter);

/**
 * Server  
*/
const server = app.listen(
    app.get('port'),
    () => { console.log(`Server on port: ${app.get('port')}`) ; const db = require('./database');}
)

module.exports = {server , app}
