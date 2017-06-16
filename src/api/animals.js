// import { get } from './request';
import stubAnimalsResponse from './stubAnimals.json';


export function getAnimals() { // eslint-disable-line import/prefer-default-export
    // return get('/api/animals');
    return Promise.resolve(stubAnimalsResponse);
}
