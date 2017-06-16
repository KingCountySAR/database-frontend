import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from 'material-ui/Card';

import styles from './Page.scss';
import AnimalsTable from './AnimalsTable';
import { animalProp } from '../propTypes';


const AnimalsPage = ({ animals }) => (
    <div className={styles.content}>
        <Card>
            <CardHeader title="Animals" subtitle="List of Animals in SAR" />
            <AnimalsTable animals={animals} />
        </Card>
    </div>
);

AnimalsPage.propTypes = {
    animals: PropTypes.arrayOf(animalProp),
};

AnimalsPage.defaultProps = {
    animals: [],
};

export default AnimalsPage;
