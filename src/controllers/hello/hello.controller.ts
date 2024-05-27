import { Request, Response } from "express";
import { Controller, Get } from "../../common/decorators/controller.decorator";

@Controller('/hello')
export class HelloController {
    @Get('/')
    hello(req: Request, res: Response) {
        res.send("Hello")
    }
    @Get('/hello')
    hello_two(req: Request, res: Response) {
        res.send("Hello x2")
    }
}