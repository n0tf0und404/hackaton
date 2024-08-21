import { Sequelize } from "sequelize";
import env from "../enviroment/enviroment.js";


const {PORT, USER, HOST, PASSWORD, NAME, DIALECT} = env.DB;

const sequelize = new Sequelize(NAME, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
    port: PORT
});

export default sequelize