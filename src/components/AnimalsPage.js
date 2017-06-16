import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from 'material-ui/Card';

import Page from './Page';
import AnimalsTable from './AnimalsTable';
import { animalProp } from '../propTypes';


const AnimalsPage = ({ animals }) => (
    <Page>
        <Card>
            <CardHeader title="Animals" subtitle="List of Animals in SAR" />
            <AnimalsTable animals={animals} />
        </Card>
    </Page>
);

AnimalsPage.propTypes = {
    animals: PropTypes.arrayOf(animalProp),
};

AnimalsPage.defaultProps = {
    animals: [],
};

export default AnimalsPage;
