import React from 'react';

import AnimalPage from '../components/AnimalPage';


const bessieMissions = [{
    event: {
        id: '965faee5-07f7-4b5f-9af5-21bf97c6a970',
        name: 'Broken Leg Rattlesnake Ledge',
        stateNumber: '17-1852',
        location: 'North Bend',
        start: '2017-05-27T14:28:00+00:00',
        stop: '2017-05-27T16:40:00+00:00'
    },
    miles: 0,
    hours: 1.0
}, {
    event: {
        id: '73377c81-4d2e-4c2f-a481-2d7101ff021d',
        name: 'Chirico trail Ankle Injury',
        stateNumber: '17-1848',
        location: 'Issaquah',
        start: '2017-05-27T11:18:00+00:00',
        stop: '2017-05-27T15:00:00+00:00'
    },
    miles: 0,
    hours: 2.4666666666666668
}];

const bessie = {
    name: 'Bessie',
    type: 'Cow',
    status: 'Active',
    owner: {
        name: 'Jason Curtis',
        status: 'Active',
    }
};


const prepareMissionData = missions => (
    // convert mission data from API (eg.
    // https://database.kcsara.org/api2/members/7b9347b1-bccd-4469-8380-046bb98d4f58/missions)
    // to the format we like in here
    missions.map(
        ({ event, miles, hours }) => ({
            demNumber: event.stateNumber,
            date: new Date(event.start),
            title: event.name,
            hours,
            miles,
        })
    )
);


export default () => (
    <AnimalPage
        animal={bessie}
        missions={prepareMissionData(bessieMissions)}
    />
);
