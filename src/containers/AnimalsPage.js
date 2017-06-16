import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import build from 'redux-object';

import AnimalsPage from '../components/AnimalsPage';
import { fetchAnimals } from '../actions/jsonApiData';
import { animalProp } from '../propTypes';


class AnimalsPageContainer extends React.Component {
    componentWillMount() {
        this.props.fetchAnimals();
    }

    render() {
        return <AnimalsPage animals={this.props.animals} />;
    }
}

AnimalsPageContainer.propTypes = {
    fetchAnimals: PropTypes.func.isRequired,
    animals: PropTypes.arrayOf(animalProp).isRequired,
};

const mapStateToProps = state => ({
    animals: build(state.jsonApiData, 'animals'),
});

const mapDispatchToProps = dispatch => ({
    fetchAnimals: () => {
        dispatch(fetchAnimals);
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalsPageContainer);
