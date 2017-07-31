import stubMembersResponse from './stubMembers.json';
import stubMemberResponse from './stubMember.json';
// import { get } from './request';


export function getMembers() {
    // return get('/api/members');
    return Promise.resolve(stubMembersResponse);
}

export function getMember(memberId) {
    // return get(`https://database.kcsara.org/api2/member/${memberId}`);
    return Promise.resolve(stubMemberResponse);
}
