import { get } from './request';


const stubMembersResponse = {
    data: [
        {
            type: 'members',
            id: 'jaime',
            attributes: {
                name: 'Jaime McCandless',
                demNumber: 'SR00218',
            },
        },
        {
            type: 'members',
            id: 'jason',
            attributes: {
                name: 'Jason Curtis',
                demNumber: 'SR00213',
            },
        }
    ],
};

export function getMembers() {
    // return get('/api/members');
    return Promise.resolve(stubMembersResponse);
}
