import PropTypes from 'prop-types';


export const missionProp = PropTypes.shape({
    demNumber: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    title: PropTypes.string.isRequired,
    hours: PropTypes.number.isRequired,
    miles: PropTypes.number.isRequired,
});

export const memberProp = PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    demNumber: PropTypes.string.isRequired,
});

export const animalProp = PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    owner: memberProp.isRequired,
});
