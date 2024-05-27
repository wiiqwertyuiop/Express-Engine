import { Router } from "express";

export const ROUTE_MAP = new Map<string, {
    route: string;
    children: Router[];
}>();

export function Controller(route: string): any {
    const f = (target: Function) => {
        const key = target.prototype["constructor"].toString();
        const entry = ROUTE_MAP.get(key);
        if (!entry) {
            ROUTE_MAP.set(key, {
                route: route,
                children: []
            });
            return;
        }
        entry.route = route;
    }
    return f;
}

export function Get(target: any, _: string, descriptor: PropertyDescriptor) {
    const key = target["constructor"].toString();
    const entry = ROUTE_MAP.get(key);
    const fun = Router({ mergeParams: true }).get('/', descriptor.value);
    if (!entry) {
        ROUTE_MAP.set(key, {
            route: "",
            children: [fun]
        });
        return;
    }
    entry.children.push(fun);
}