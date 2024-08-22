import { Sequelize } from "sequelize";
import { environments } from "./environments.js";

const sequelize = new Sequelize(
  environments.DB_NAME,
  environments.DB_USER,
  environments.DB_PASSWORD,
  {
    host: environments.DB_HOST,
    dialect: environments.DB_DIALECT,
    port: environments.DB_PORT,
  }
);

export default sequelize; // Cambiar a export default

export const connectDB = async () => {
  await sequelize
    .sync()
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.log("Unable to connect to the database", err);
    });
};
