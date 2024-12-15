export declare const PERMISSIONS_KEY = "permissions";
export declare const Permissions: (permissions: {
    resource: string;
    actions: string[];
}[]) => import("@nestjs/common").CustomDecorator<string>;
