const request = require("supertest")
const { app, server } = require("../server")

it("Should create a new user", async () => {

    const userToTest = { username: "camilo", password: "" }

    const response = await request(app)
        .post("/user")
        .send(userToTest)


    expect(JSON.parse(response.text).message || JSON.parse(response.text).error).toBe("user created")
    expect(response.status).toBe(201)

})