import express, { Express } from "express";
import "./controllers";
import { ROUTE_MAP } from "./decorator";

const app: Express = express();
const port = 8080;

ROUTE_MAP.forEach((route) => {
    console.log(route.route)
    app.use(route.route, route.children);
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});