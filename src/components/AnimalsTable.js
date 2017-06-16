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

import { animalProp } from '../propTypes';

const AnimalsTableRow = ({ animal }) => {
    const { name, type, status, owner } = animal;

    return (
        <TableRow>
            <TableRowColumn><Link to={`/animals/${animal.id}`}>{name}</Link></TableRowColumn>
            <TableRowColumn>{type}</TableRowColumn>
            <TableRowColumn>{status}</TableRowColumn>
            {owner && <TableRowColumn><Link to={`/members/${owner.id}`}>{owner.name} </Link></TableRowColumn>}
        </TableRow>
    );
};

AnimalsTableRow.propTypes = {
    animal: animalProp.isRequired,
};

const AnimalsTable = ({ animals }) => {
    const animalRows = animals.map(
        animal => <AnimalsTableRow animal={animal} key={animal.name} />
    );

    return (
        <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Type</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                    <TableHeaderColumn>Owner</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover>
                {animalRows}
            </TableBody>
        </Table>
    );
};

AnimalsTable.propTypes = {
    animals: PropTypes.arrayOf(animalProp).isRequired,
};

export default AnimalsTable;
