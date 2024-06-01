import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express, { Express, NextFunction, Request, Response } from "express";
import { ROUTE_MAP } from "./src/common/decorators/controller.decorator";
import { compileTemplate, loadTemplateFiles } from "./src/common/template/template";
import "./src/controllers/controllers";

const app: Express = express();
const port = 8080;
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// Server static files
app.use(express.static("public"));

// Load template files
loadTemplateFiles();

// Handle controller routes
ROUTE_MAP.forEach((route) => {
    app.use(route.route, (req: Request, res: Response, next: NextFunction) => {
        // Handle middleware
        if (route.options?.referer === true && !req.headers.referer) {
            res.status(404);
            res.send(compileTemplate("404.html"));
            return;
        }
        next();
    }, route.children);
});

// 404 on all unkown pages
app.get("*", function (req: Request, res: Response) {
    res.status(404);
    res.send(compileTemplate("404.html"))
});

// Listen
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});