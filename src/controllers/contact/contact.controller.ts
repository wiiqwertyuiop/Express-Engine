import { Request, Response } from "express";
import { Controller, Get, Put } from "../../common/decorators/controller.decorator";
import { compileTemplate } from "../../common/template/template";
import { getContact } from "../../models/contact/contact.model";

@Controller('/contact', { needsReferer: true })
export class ContactController {

  @Get()
  getContact(request: Request, response: Response) {
    const contact = getContact(request);
    return response.send(compileTemplate("contact/form.html", contact));
  }

  @Get('/edit')
  getContactEdit(request: Request, response: Response) {
    const contact = getContact(request);
    return response.send(compileTemplate("contact/editForm.html", contact));
  }

  @Put()
  updateContact(request: Request, response: Response) {
    const updatedContact = request.body;
    response.cookie("contact", updatedContact, { httpOnly: true, sameSite: 'strict', secure: true });
    return response.send(compileTemplate("contact/form.html", updatedContact));
  }
}


