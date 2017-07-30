import { connect } from 'react-redux';

import PrimaryNavigation from '../components/PrimaryNavigation';

const mapStateToProps = state => ({
    user: state.oidc.user,
    isLoadingUser: state.oidc.isLoadingUser
});

export default connect(mapStateToProps)(PrimaryNavigation);
