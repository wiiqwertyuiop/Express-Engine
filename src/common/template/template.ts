import fs from "fs";
import Handlebars from "handlebars";

export function compileTemplate(name: string, data?: unknown): string {
    const template = fs.readFileSync(`src/views/${name}`, 'utf8');
    if (template) {
        return Handlebars.compile(template)(data);
    }
    console.log(`ERROR: Template [src/views//${name}] does not exist`);
    return "";
}