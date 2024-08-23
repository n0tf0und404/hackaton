import app from "./src/app.js";
import env from "./src/enviroment/enviroment.js";
import sequelize from "./src/config/db.js";


const port = env.PORT;

sequelize.sync().then(() => {
        console.log("Database connected...");
        app.listen(port, () => {
            console.log(`Server running on port http://localhost:${port}`);
        })
    })
