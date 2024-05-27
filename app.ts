import express, { Express } from "express";
import { ROUTE_MAP } from "./src/common/decorators/controller.decorator";
import "./src/controllers/controllers";

const app: Express = express();
const port = 8080;

ROUTE_MAP.forEach((route) => {
    app.use(route.route, route.children);
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});