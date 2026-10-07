import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();

app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://newsverify.tanmayshirbhayye.tech",
    ],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());


import { router } from "./routes/user.router";
import { errorMiddleware } from "./middleware/error.middleware";

app.use("/api/v1/user", router);

app.use(errorMiddleware as express.ErrorRequestHandler);

export default app;