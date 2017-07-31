import normalize from 'json-api-normalizer';

import { createAction } from 'redux-actions';
import { getAnimals } from '../api/animals';
import { getMembers, getMember } from '../api/members';

export const requestJsonApiData = createAction('REQUEST_JSON_API_DATA');
export const receieveJsonApiData = createAction('RECEIVE_JSON_API_DATA');


export const fetchAnimals = (dispatch) => {
    dispatch(requestJsonApiData());

    getAnimals().then((response) => {
        dispatch(receieveJsonApiData(normalize(response)));
    });
};

export const fetchMembers = (dispatch) => {
    dispatch(requestJsonApiData());

    getMembers().then((response) => {
        dispatch(receieveJsonApiData(normalize(response)));
    });
};


// API response is not JSONAPI conformant (yet!)
const transformMemberToJsonAPI = (response) => {
    const { name, workerNumber, id } = response;
    return {
        data: {
            id,
            type: 'members',
            attributes: {
                name,
                demNumber: workerNumber
            },
        }
    };
};

export const fetchMember = memberId => (
    (dispatch) => {
        dispatch(requestJsonApiData());

        getMember(memberId).then((response) => {
            dispatch(receieveJsonApiData(normalize(transformMemberToJsonAPI(response))));
        });
    }
);
