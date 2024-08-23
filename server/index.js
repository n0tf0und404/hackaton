import app from "./app.js";
import {environments as env} from "./src/config/environments.js";
import { connectDB } from "./src/config/connectDB.js";

connectDB()
  .then(() => {
    app.listen(env.PORT || 3000, () => {
      console.log(`Server running on port ${env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
  });
