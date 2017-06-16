import stubMembersResponse from './stubMembers.json';
// import { get } from './request';


export function getMembers() { // eslint-disable-line  import/prefer-default-export
    // return get('/api/members');
    return Promise.resolve(stubMembersResponse);
}
