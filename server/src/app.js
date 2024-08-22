import Express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import exampleRouter from "./routes/example.router.js";


const app = Express();

app.use(cors());
app.use(helmet()),
app.use(morgan("dev"));
app.use(Express.json());


app.use("/example", exampleRouter);


export default app