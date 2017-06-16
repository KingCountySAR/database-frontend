import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import build from 'redux-object';

import MembersPage from '../components/MembersPage';
import { fetchMembers } from '../actions/jsonApiData';
import { memberProp } from '../propTypes';


class MembersPageContainer extends React.Component {
    componentWillMount() {
        this.props.fetchMembers();
    }

    render() {
        return <MembersPage members={this.props.members} />;
    }
}

MembersPageContainer.propTypes = {
    fetchMembers: PropTypes.func.isRequired,
    members: PropTypes.arrayOf(memberProp).isRequired,
};

const mapStateToProps = state => ({
    members: build(state.jsonApiData, 'members'),
});

const mapDispatchToProps = dispatch => ({
    fetchMembers: () => {
        dispatch(fetchMembers);
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MembersPageContainer);
