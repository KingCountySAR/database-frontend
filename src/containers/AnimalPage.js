import React from 'react';

import AnimalPage from '../components/AnimalPage';
import stubMissions from '../api/stubMissions.json';


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
        missions={prepareMissionData(stubMissions.data)}
    />
);
