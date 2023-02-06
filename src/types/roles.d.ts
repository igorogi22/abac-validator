export type Action<T = string> = T;

export type Role<T> = {
    context: string;
    actions: Action<T>[];
}

export type RoleValidation<T> = {
    context: string;
    action: Action<T>
}