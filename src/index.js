const express = require("express");
require("express-async-errors");

const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(routes);
// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
    console.log(error);
    response.sendStatus(500);
});

app.listen(3000, () =>
    console.log("🔥 Server started at http://localhost:3000")
);
