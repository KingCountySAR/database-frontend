import { connect } from 'react-redux';

import PrimaryNavigation from '../components/PrimaryNavigation';

const mapStateToProps = state => ({ user: state.oidc.user });
export default connect(mapStateToProps)(PrimaryNavigation);
