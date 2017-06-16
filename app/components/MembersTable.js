import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    Table,
    TableBody,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableHeader
} from 'material-ui/Table';

import { memberProp } from '../propTypes';

const MembersTableRow = ({ member }) => (
    <TableRow>
        <TableRowColumn>
            <Link to={`/members/${member.id}`}>{`${member.name}`.trim()}</Link>
        </TableRowColumn>
        <TableRowColumn>{member.demNumber}</TableRowColumn>
    </TableRow>

);

MembersTableRow.propTypes = {
    member: memberProp.isRequired,
};

const MembersTable = ({ members }) => {
    const memberRows = members.map(
        member => <MembersTableRow member={member} key={member.id} />
    );

    return (
        <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>DEM#</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover>
                {memberRows}
            </TableBody>
        </Table>
    );
};

MembersTable.propTypes = {
    members: PropTypes.arrayOf(memberProp).isRequired,
};

export default MembersTable;
