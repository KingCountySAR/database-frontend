import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from 'material-ui/Card';

import MissionsTable from './MissionsTable';
import { missionProp } from '../propTypes';
import Page from './Page';


const MemberPage = ({ missions }) => (
    <Page>
        <Card>
            <CardHeader
                title="Jaime McCandless"
                subtitle="DEM: SR00218"
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
};

export default MemberPage;
