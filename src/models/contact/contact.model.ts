export class Contact {
    private email: string;
    constructor(private firstName: string, private lastName: string) {
        this.email = `${firstName}@${lastName}.com`.toLowerCase();
    }
    getContact() {
        return { firstName: this.firstName, lastName: this.lastName, email: this.email };
    }
}