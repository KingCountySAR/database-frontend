import { get } from './request';


const stubAnimalsResponse = {
    data: [
        {
            type: 'animals',
            id: 1,
            attributes: {
                name: 'Lassie',
                type: 'Dog',
                status: 'Active',
            },
            relationships: {
                owner: {
                    data: {
                        type: 'members',
                        id: 'jaime',
                    },
                },
            },
        },
        {
            type: 'animals',
            id: 2,
            attributes: {
                name: 'Bessie',
                type: 'Cow',
                status: 'Active',
            },
            relationships: {
                owner: {
                    data: {
                        type: 'members',
                        id: 'jason',
                    },
                },
            },
        },
    ],
    included: [
        {
            type: 'members',
            id: 'jaime',
            attributes: {
                name: 'Jaime McCandless',
                status: 'Active',
            },
        },
        {
            type: 'members',
            id: 'jason',
            attributes: {
                name: 'Jason Curtis',
                status: 'Active',
            },
        }
    ],
};

export function getAnimals() {
    // return get('/api/animals');
    return Promise.resolve(stubAnimalsResponse);
}
