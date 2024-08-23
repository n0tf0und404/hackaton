import express from "express";
import cors from "cors";
import morgan from "morgan"
import http from "http"
import { Server } from "socket.io";
import { router } from "./src/routes/routes.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
    },
});

app.use(cors());
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('set name', (name) => {
        socket.name = name
        console.log(`User ${name} connected`);
        
    })

    socket.on('message', (msg => {
        console.log('message: ', msg);
        io.emit('message', { user: socket.name, message: msg })
    }))

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
})

// Middleware para manejar rutas
app.use("/", router);
app.use(errorHandler);

export default server;
