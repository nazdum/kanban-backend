let DATABASE = {
    USERNAME: "",
    PASSWORD: "",
    NAME: ""
}

if (process.env.NODE_ENV === "production") {

    const { DB_NAME, DB_PASSWORD, DB_USERNAME } = process.env
    DATABASE = {
        USERNAME: DB_USERNAME,
        PASSWORD: DB_PASSWORD,
        NAME: DB_NAME
    }

} else if (process.env.NODE_ENV === "development") {

    const { TEST_DB_NAME, TEST_DB_PASSWORD, TEST_DB_USERNAME } = process.env
    DATABASE = {
        USERNAME: TEST_DB_USERNAME,
        PASSWORD: TEST_DB_PASSWORD,
        NAME: TEST_DB_NAME
    }

} else if (process.env.NODE_ENV === "test") {
    const { TEST_DB_NAME, TEST_DB_PASSWORD, TEST_DB_USERNAME } = process.env
    DATABASE = {
        USERNAME: TEST_DB_USERNAME,
        PASSWORD: TEST_DB_PASSWORD,
        NAME: TEST_DB_NAME
    }
}

URI = `mongodb+srv://${DATABASE.USERNAME}:${DATABASE.PASSWORD}@nodeapps.atlbi.mongodb.net/${DATABASE.NAME}?retryWrites=true&w=majority`


module.exports = URI