import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from 'material-ui/Card';

import styles from './MemberMembersPage.scss';
import MissionsTable from './MissionsTable';
import { missionProp } from '../propTypes';


const MemberPage = ({ missions }) => (
    <div className={styles.content}>
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
    </div>
    );


MemberPage.propTypes = {
    missions: PropTypes.arrayOf(missionProp).isRequired,
};

export default MemberPage;
