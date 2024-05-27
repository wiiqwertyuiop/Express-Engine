import { Router } from "express";

export const ROUTE_MAP = new Map<string, {
    route: string;
    children: Router[];
}>();

export function Controller(route: string) {
    return (target: Function) => {
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
}

export function Get(path: string) {
    return (target: any, _: string, descriptor: PropertyDescriptor) => {
        const key = target["constructor"].toString();
        const entry = ROUTE_MAP.get(key);
        const fun = Router({ mergeParams: true }).get(path, descriptor.value);
        if (!entry) {
            ROUTE_MAP.set(key, {
                route: "",
                children: [fun]
            });
            return;
        }
        entry.children.push(fun);
    }
}

export function Post(path: string) {
    return (target: any, _: string, descriptor: PropertyDescriptor) => {
        const key = target["constructor"].toString();
        const entry = ROUTE_MAP.get(key);
        const fun = Router({ mergeParams: true }).post(path, descriptor.value);
        if (!entry) {
            ROUTE_MAP.set(key, {
                route: "",
                children: [fun]
            });
            return;
        }
        entry.children.push(fun);
    }
}

export function Put(path: string) {
    return (target: any, _: string, descriptor: PropertyDescriptor) => {
        const key = target["constructor"].toString();
        const entry = ROUTE_MAP.get(key);
        const fun = Router({ mergeParams: true }).put(path, descriptor.value);
        if (!entry) {
            ROUTE_MAP.set(key, {
                route: "",
                children: [fun]
            });
            return;
        }
        entry.children.push(fun);
    }
}

export function Delete(path: string) {
    return (target: any, _: string, descriptor: PropertyDescriptor) => {
        const key = target["constructor"].toString();
        const entry = ROUTE_MAP.get(key);
        const fun = Router({ mergeParams: true }).delete(path, descriptor.value);
        if (!entry) {
            ROUTE_MAP.set(key, {
                route: "",
                children: [fun]
            });
            return;
        }
        entry.children.push(fun);
    }
}