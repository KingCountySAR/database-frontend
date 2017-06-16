import stubMembersResponse from './stubMembers.json';
import { get } from './request';


export function getMembers() {
    // return get('/api/members');
    return Promise.resolve(stubMembersResponse);
}
