import Express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";


const app = Express();

app.use(cors());
app.use(helmet()),
app.use(morgan("dev"));
app.use(Express.json());


export default app