import { get } from './request';
import stubAnimalsResponse from './stubAnimals.json';


export function getAnimals() {
    // return get('/api/animals');
    return Promise.resolve(stubAnimalsResponse);
}
