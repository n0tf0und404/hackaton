import sequelize from "./db.js";
import { setupAssociations } from "../models/associations.js";

const connectDB = async () => {
    return new Promise((resolve, reject) => {
        setupAssociations();
    
        sequelize.authenticate()
            .then(() => {
                console.log("Database connected...");
                
                sequelize.sync({ force: true })
                    .then(() => {
                        console.log("Database synced...");
                        resolve()
                    })
    
            })
            .catch((err) => {
                console.error("Failed to connect to the database:", err);
                reject()
                process.exit(1);
            });
        
    })
};

export { connectDB }