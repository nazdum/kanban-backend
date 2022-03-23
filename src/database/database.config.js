const {DB_USERNAME , DB_PASSWORD , DB_NAME}  = process.env;
URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@nodeapps.atlbi.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

module.exports = {
    DB_USERNAME,
    DB_PASSWORD,
    URI
}