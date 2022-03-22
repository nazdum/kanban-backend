const express = require('express').Router();

/**
*   @param {express.Request} request 
*   @param {express.Response} response
*/
const createTask = (request, response) => {
    response.json({ "msg": "createTask" });
}

/**
*   @param {express.Request} request 
*   @param {express.Response} response
*/
const deleteTask = (request, response) => {
    response.json({ "msg": "deleteTask" });
}

module.exports = {
    createTask, deleteTask
}