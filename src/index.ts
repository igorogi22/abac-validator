import { Roles, Data} from "./types";


export function validateRoles<T>(rolesToValidate: Roles.Role<T>[], applyingFor: Roles.RoleValidation<T>): boolean {

    const matchRole = rolesToValidate.find(role => role.context === applyingFor.context);

    if(!matchRole) {
       return false;
    }

    if(!matchRole.actions.find(action => action === applyingFor.action)) {
        return false;
    }

    return true;
}


export function validateDataRoles<T = {}>(data: T, filter: Record<keyof any, Data.Filter>, parentKey = ''): T {
    const filteredData: Record<string, any> = {};

    for(const key in data) {
        const fullKey = parentKey ? `${parentKey}.${key}` : key;
        if(typeof data[key] === 'object' && !Array.isArray(data[key])) {
            filteredData[key] = validateDataRoles(data[key] as any, filter, fullKey); 
        } else {
            switch(filter[fullKey]?.action) {
                case 'transform':
                    filteredData[key] = filter[fullKey]?.to;
                    break;
                case 'hidden':
                    break;
                case 'visible':
                    filteredData[key] = data[key];
                    break;
                default:
                    filteredData[key] = data[key];
            }
        }
    }

    return filteredData as T;
}
