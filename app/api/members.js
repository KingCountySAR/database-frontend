import { get } from './request';


const stubMembersResponse = {
    data: [
        {
            type: 'members',
            id: 'jaime',
            attributes: {
                firstName: 'Jaime',
                lastName: 'McCandless',
                demNumber: 'SR00218',
            },
        },
        {
            type: 'members',
            id: 'jason',
            attributes: {
                firstName: 'Jason',
                lastName: 'Curtis',
                demNumber: 'SR00213',
            },
        }
    ],
};

export function getMembers() {
    // return get('/api/members');
    return Promise.resolve(stubMembersResponse);
}
