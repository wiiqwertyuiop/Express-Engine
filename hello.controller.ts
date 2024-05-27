import { Request, Response } from "express";
import { Controller, Get } from "./decorator";

@Controller('/hello')
export class HelloController {
    @Get
    hello(req: Request, res: Response) {
        res.send("Hello")
    }
}