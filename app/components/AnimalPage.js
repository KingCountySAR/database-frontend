import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import styles from './MemberPage.scss';
import MissionsTable from './MissionsTable';
import { missionProp, animalProp } from '../propTypes';


const AnimalPage = ({ animal, missions }) => (
    <div className={styles.content}>
        <Card>
            <CardHeader
                title={animal.name}
            />
            <CardText>
                <p>Type: {animal.type}</p>
                <p>Name: {animal.name}</p>
                <p>Status: {animal.status}</p>
                <p>Owner: <Link to={`/members/${animal.owner.id}`}>{animal.owner.name}</Link></p>
            </CardText>
        </Card>
        <Card>
            <CardHeader title="Missions" subtitle={`Missions ${animal.name} has responded to`} />
            <MissionsTable missions={missions} />
        </Card>
    </div>
    );


AnimalPage.propTypes = {
    animal: animalProp.isRequired,
    missions: PropTypes.arrayOf(missionProp).isRequired,
};

export default AnimalPage;
