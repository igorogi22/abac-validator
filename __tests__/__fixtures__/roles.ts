import { Data, Roles } from "../../src/types"

export type User<T> = {
    name: string;
    email: string;
    group: string;
    permissions: Roles.Role<T>[]
    address: {
        street?: string;
        number?: string;
        city: string;
    }
}

export const userMock = {
    name: 'John Dou',
    email: 'johndou@example.com',
    group: 'test-group-id',
    address: {
        street: 'Any avenue',
        number: '100-a',
        city: 'Any City',
    },
    permissions: [
        {
            context: 'clients',
            actions: ['create', 'read', 'update', 'delete']
        },
        {
            context: 'products',
            actions: ['create', 'read', 'update', 'delete']
        }
    ]
}

export const userWithoutInformationHidden = {
    name: 'John Dou',
    email: 'johndou@example.com',
    group: '---',
    address: {
        number: '100-a',
        city: 'Any City',
    },
    permissions: [
        {
            context: 'clients',
            actions: ['create', 'read', 'update', 'delete']
        },
        {
            context: 'products',
            actions: ['create', 'read', 'update', 'delete']
        }
    ]
}

export const userMap = {
    name: {
        action: 'visible' as Data.DATA_ACTIONS.VISIBLE
    },
    group: {
        action: 'transform' as Data.DATA_ACTIONS.HIDDEN,
        to: '---'
    },
    'address.street': {
        action: 'hidden' as Data.DATA_ACTIONS.HIDDEN
    }
}
