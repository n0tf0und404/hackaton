import app from "./app.js";
import {environments as env} from "./src/config/environments.js";
import sequelize from "./src/config/db.js"; // Importar como default

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");

    sequelize
      .sync({ alter: true })
      .then(() => {
        console.log("Database synced...");

        app.listen(env.PORT || 3000, () => {
          console.log(`Server running on port ${env.PORT || 3000}`);
        });
      })
      .catch((err) => {
        console.error("Failed to sync database:", err);
        process.exit(1);
      });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
  });
