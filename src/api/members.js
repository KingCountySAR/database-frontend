//import stubMembersResponse from './stubMembers.json';
//import stubMemberResponse from './stubMember.json';
import { getApi as get } from './request';


export function getMembers() {
    return get('/api/members');
    //return Promise.resolve(stubMembersResponse);
}

export function getMember(memberId) {
    return get(`/api/members/${memberId}`);
    //return Promise.resolve(stubMemberResponse);
}
