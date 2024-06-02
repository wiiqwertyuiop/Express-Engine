import { Request, Response } from "express";
import { Controller, Get, Put } from "../../common/decorators/controller.decorator";
import { compileTemplate } from "../../common/template/template";
import { Contact } from "../../models/contact/contact.model";

@Controller('/contact', { needsReferer: true })
export class ContactController {

  @Get()
  getContact(request: Request, response: Response) {
    if (!request.cookies['contact']) {
      const placeholder = new Contact("Joe", "Blow");
      response.cookie('contact', placeholder, { httpOnly: true, sameSite: 'strict', secure: true })
      return response.send(compileTemplate("contact/form.html", placeholder));
    }
    return response.send(compileTemplate("contact/form.html", request.cookies['contact']));
  }

  @Get('/edit')
  getContactEdit(request: Request, response: Response) {
    return response.send(compileTemplate("contact/editForm.html", request.cookies['contact']));
  }

  @Put()
  updateContact(request: Request, response: Response) {
    const updatedContact = request.body;
    response.cookie("contact", updatedContact, { httpOnly: true, sameSite: 'strict', secure: true });
    return response.send(compileTemplate("contact/form.html", updatedContact));
  }
}


