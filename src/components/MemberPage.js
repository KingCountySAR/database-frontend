import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from 'material-ui/Card';

import MissionsTable from './MissionsTable';
import { missionProp, memberProp } from '../propTypes';
import Page from './Page';


const MemberPage = ({ member, missions }) => (
    <Page>
        <Card>
            <CardHeader
                title={member && member.name}
                subtitle={`DEM: ${member && member.demNumber}`}
                avatar="http://0.gravatar.com/avatar/b7d2589d07b818eba5584c31c2f66a82"
            />
        </Card>
        <Card>
            <CardHeader title="Missions" subtitle="Missions Jaime has responded to" />
            <MissionsTable missions={missions} />
        </Card>
    </Page>
    );


MemberPage.propTypes = {
    missions: PropTypes.arrayOf(missionProp).isRequired,
    member: memberProp,
};

export default MemberPage;
