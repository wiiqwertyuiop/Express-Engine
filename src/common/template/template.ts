import fs, { Dirent } from "fs";
import Handlebars from "handlebars";

const basepath = "src/views";
const templateMap = new Map<string, string>();

export function loadTemplateFiles() {
    function walk(path: string) {
        const entries: Dirent[] = fs.readdirSync(path, { withFileTypes: true });

        for (const entry of entries) {
            const filepath = `${path}/${entry.name}`;
            if (entry.isFile()) {
                const template = fs.readFileSync(filepath, 'utf8');
                templateMap.set(filepath, template)
            } else if (entry.isDirectory()) {
                walk(filepath)
            }
        }
    };
    walk(basepath);
}

export function compileTemplate(name: string, data?: unknown): string {
    const template = templateMap.get(`${basepath}/${name}`);
    if (template) {
        return Handlebars.compile(template)(data);
    }
    console.log(`ERROR: Template [${basepath}/${name}] does not exist`);
    return "";
}