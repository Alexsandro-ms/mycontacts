const express = require("express");
const { setupDatabase } = require("./database/setupDatabase");
require("express-async-errors");

const app = express();
const routes = require("./routes");
const cors = require("./app/middlewares/cors");
const errorHandler = require("./app/middlewares/errorHandler");

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

const port = process.env.PORT || 3001;

setupDatabase()
    .then(() => {
        app.listen(3001, async () =>
            console.log(`🔥 Server started at http://localhost:${port}`)
        );
    })
    .catch((error) => {
        console.error("❌ Error setting up the database:", error);
        process.exit(1); // Exit the process with a failure code
    });
