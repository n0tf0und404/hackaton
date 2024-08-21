import app from "./src/app.js";
import env from "./src/enviroment/enviroment.js";


const port = env.PORT;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})