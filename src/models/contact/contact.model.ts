import { Request } from "express";

class Contact {
    private email: string;
    constructor(private firstName: string, private lastName: string) {
        this.email = `${firstName}@${lastName}.com`.toLowerCase();
    }
}

export function getContact(request: Request): Contact {
    const savedContact = request.cookies['contact'];
    if (!savedContact) {
        return new Contact("Joe", "Blow");
    }
    return savedContact;
}