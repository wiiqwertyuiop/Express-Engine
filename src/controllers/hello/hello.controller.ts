import { Request, Response } from "express";
import { Controller, Get } from "../../common/decorators/controller.decorator";
import { compileTemplate } from "../../common/template/template";

@Controller('/hello')
export class HelloController {
    @Get()
    hello(req: Request, res: Response) {
        res.send(compileTemplate("hello/hello.html", "World"))
    }
    @Get('/hello')
    hello_two(req: Request, res: Response) {
        res.send("Hello x2")
    }
}