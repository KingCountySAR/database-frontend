import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from 'material-ui/Card';

import styles from './MembersPage.scss';
import MembersTable from './MembersTable';
import { memberProp } from '../propTypes';


const MembersPage = ({ members }) => (
    <div className={styles.content}>
        <Card>
            <CardHeader title="Members" subtitle="List of Members in SAR" />
            <MembersTable members={members} />
        </Card>
    </div>
);

MembersPage.propTypes = {
    members: PropTypes.arrayOf(memberProp),
};

MembersPage.defaultProps = {
    members: [],
};


export default MembersPage;
