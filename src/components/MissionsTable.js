import React from 'react';
import PropTypes from 'prop-types';
import {
    Table,
    TableBody,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableHeader
} from 'material-ui/Table';

import { missionProp } from '../propTypes';

const MissionsTableRow = ({ mission }) => (
    <TableRow>
        <TableRowColumn>{mission.demNumber}</TableRowColumn>
        <TableRowColumn>{mission.date.toISOString().slice(0, 10)}</TableRowColumn>
        <TableRowColumn>{mission.title}</TableRowColumn>
        <TableRowColumn>{mission.hours.toFixed(1)}</TableRowColumn>
        <TableRowColumn>{mission.miles.toFixed(0)}</TableRowColumn>
    </TableRow>
);

MissionsTableRow.propTypes = {
    mission: missionProp.isRequired,
};

const MissionsTable = ({ missions }) => {
    const missionRows = missions.map(
        mission => <MissionsTableRow mission={mission} key={mission.demNumber} />
    );

    return (
        <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn>Mission</TableHeaderColumn>
                    <TableHeaderColumn>Date</TableHeaderColumn>
                    <TableHeaderColumn>Title</TableHeaderColumn>
                    <TableHeaderColumn>Hours</TableHeaderColumn>
                    <TableHeaderColumn>Miles</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover>
                {missionRows}
            </TableBody>
        </Table>
    );
};

MissionsTable.propTypes = {
    missions: PropTypes.arrayOf(missionProp).isRequired,
};

export default MissionsTable;
