import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from 'material-ui/Card';

import MembersTable from './MembersTable';
import { memberProp } from '../propTypes';
import Page from './Page';


const MembersPage = ({ members }) => (
    <Page>
        <Card>
            <CardHeader title="Members" subtitle="List of Members in SAR" />
            <MembersTable members={members} />
        </Card>
    </Page>
);

MembersPage.propTypes = {
    members: PropTypes.arrayOf(memberProp),
};

MembersPage.defaultProps = {
    members: [],
};


export default MembersPage;
