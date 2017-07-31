import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import build from 'redux-object';

import MemberPage from '../components/MemberPage';
import { fetchMember } from '../actions/jsonApiData';
import { memberProp } from '../propTypes';

import stubMissions from '../api/stubMissions.json';


const prepareMissionData = missions => (
    // convert mission data from API (eg.
    // https://database.kcsara.org/api2/members/7b9347b1-bccd-4469-8380-046bb98d4f58/missions)
    // to the format we like in here
    missions.map(
        ({ event, miles, hours }) => ({
            demNumber: event.stateNumber,
            date: new Date(event.start),
            title: event.name,
            hours,
            miles,
        })
    )
);


class MemberPageContainer extends React.Component {
    componentWillMount() {
        this.props.fetchMember();
    }

    render() {
        return (
            <MemberPage
                member={this.props.member}
                missions={prepareMissionData(stubMissions.data)}
            />
        );
    }
}

MemberPageContainer.propTypes = {
    fetchMember: PropTypes.func.isRequired,
    member: memberProp,
};

MemberPageContainer.defaultProps = {
    member: {},
};

const mapStateToProps = (state, ownProps) => ({
    member: build(state.jsonApiData, 'members', ownProps.match.params.memberId),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMember: () => {
        dispatch(fetchMember(ownProps.match.params.memberId));
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberPageContainer);
