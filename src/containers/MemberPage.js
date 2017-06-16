import React from 'react';

import MemberPage from '../components/MemberPage';


const jaimeMissions = [{
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
}, {
    event: {
        id: '76e0d438-10bf-4054-b094-d772a8496f83',
        name: 'Rattlesnake Lost Child',
        stateNumber: '17-1488',
        location: 'North Bend',
        start: '2017-05-02T19:47:00+00:00',
        stop: '2017-05-02T20:22:00+00:00'
    },
    miles: 0,
    hours: 0.5
}, {
    event: {
        id: '9f829084-9ba1-47dd-a44c-0365cd58af90',
        name: 'Red Mtn Missing Backcountry Skier Avalanche',
        stateNumber: '17-1206',
        location: 'Red Mountain',
        start: '2017-04-11T17:57:00+00:00',
        stop: '2017-04-12T03:45:00+00:00'
    },
    miles: 0,
    hours: 9.4166666666666661
}, {
    event: {
        id: 'e56df5fd-4648-41ff-80e1-9aea772ee9ad',
        name: 'Teneriffe Lost Hiker',
        stateNumber: '17-0418',
        location: 'Mt Teneriffe',
        start: '2017-02-04T16:00:00+00:00',
        stop: null
    },
    miles: 0,
    hours: 7.5
}, {
    event: {
        id: 'f9d1266c-e543-4666-a2bb-cb5d5fde778f',
        name: 'Rattlesnake Ice Fall',
        stateNumber: '17-0195',
        location: 'North Bend',
        start: '2017-01-16T15:53:00+00:00',
        stop: null
    },
    miles: 0,
    hours: 2.25
}, {
    event: {
        id: '269cc0da-f496-4b7e-a678-ff41a239bcb6',
        name: 'Green River ES',
        stateNumber: '16-ES-052',
        location: 'Seatac',
        start: '2016-11-12T07:00:00+00:00',
        stop: null
    },
    miles: 50,
    hours: 9.3333333333333339
}, {
    event: {
        id: '2b732e21-4494-4887-9ffc-8794ed57deb5',
        name: 'Ames Lake 2',
        stateNumber: '16-ES-032',
        location: 'Ames Lake',
        start: '2016-07-09T07:00:00+00:00',
        stop: '2016-07-09T14:00:00+00:00'
    },
    miles: 0,
    hours: 3.75
}, {
    event: {
        id: '9bfc1c90-bf49-47e7-8b86-670eb1d17ed5',
        name: 'Little Mount Si - Injured Hiker',
        stateNumber: '16-0674',
        location: 'Little Mount Si',
        start: '2016-02-20T00:00:00+00:00',
        stop: '2016-02-20T23:00:00+00:00'
    },
    miles: 0,
    hours: 4.5
}, {
    event: {
        id: '6d497e94-fb9a-4327-b86d-77bece44f158',
        name: 'Hiker slipped on Rattlesnake',
        stateNumber: '15-4953',
        location: 'Rattlesnake Lake Parking Lot',
        start: '2015-12-17T17:15:00+00:00',
        stop: '2015-12-17T23:00:00+00:00'
    },
    miles: 0,
    hours: 2.9
}, {
    event: {
        id: 'c012d04f-c4ae-4944-ac2a-19e9ca11b7e8',
        name: 'Kennewick Guy',
        stateNumber: '15-ES-044',
        location: 'Summit West',
        start: '2015-10-10T07:30:00+00:00',
        stop: '2015-10-10T12:30:00+00:00'
    },
    miles: 0,
    hours: 6.0
}, {
    event: {
        id: '047c5c76-639b-469c-9913-b3ededf6f6cc',
        name: 'Talapus Lake Cliffed out Hiker',
        stateNumber: '15-3551',
        location: 'Talapus Lake trailhead',
        start: '2015-09-02T20:53:00+00:00',
        stop: '2015-09-03T03:15:00+00:00'
    },
    miles: 80,
    hours: 4.6
}, {
    event: {
        id: 'd10e8cb1-e5ac-4efb-b4e5-771b9d701060',
        name: 'Snoqualmie Valley Injured Equestrian Rider',
        stateNumber: '15-2606',
        location: '4266 365th Dr SE',
        start: '2015-07-06T09:35:00+00:00',
        stop: '2015-07-06T13:00:00+00:00'
    },
    miles: 0,
    hours: 3.0
}, {
    event: {
        id: 'e4c1cbe8-7154-42bd-b805-a999e52cb770',
        name: 'Mailbox II (Knee)',
        stateNumber: '15-1883',
        location: 'Mailbox Peak Trail',
        start: '2015-05-25T00:00:00+00:00',
        stop: null
    },
    miles: 0,
    hours: 2.1666666666666665
}, {
    event: {
        id: '74995a2b-3027-4fb1-a94c-3e0ffbca6117',
        name: 'Tiger Mtn Injured Hiker',
        stateNumber: '15-1368',
        location: 'Tiger Mountain',
        start: '2015-04-19T13:00:00+00:00',
        stop: '2015-04-19T19:00:00+00:00'
    },
    miles: 0,
    hours: 5.166666666666667
}, {
    event: {
        id: '98c883d5-b792-4be3-b4bd-6a4477aa38a1',
        name: 'Lost Hikers - Tinkham Rd',
        stateNumber: '15-1203',
        location: '47.385374 121.505141',
        start: '2015-04-05T21:00:00+00:00',
        stop: '2015-04-06T00:05:00+00:00'
    },
    miles: 0,
    hours: 3.4166666666666665
}, {
    event: {
        id: '5ed902f8-18d4-42b7-9c26-b1def301a354',
        name: 'Bellevue Evidence Search',
        stateNumber: '15-ES-018',
        location: 'Bellevue Way',
        start: '2015-04-04T00:00:00+00:00',
        stop: null
    },
    miles: 20,
    hours: 4.916666666666667
}, {
    event: {
        id: '821ff199-2760-46ea-9f1a-1fc95d57d4dd',
        name: 'Cougar Mountain Injured Female',
        stateNumber: '15-0988',
        location: '8524 146TH PLACE SE, NEWCASTLE',
        start: '2015-03-21T17:37:00+00:00',
        stop: '2015-03-21T20:00:00+00:00'
    },
    miles: 0,
    hours: 2.1666666666666665
}];


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
    <MemberPage missions={prepareMissionData(jaimeMissions)} />
);
