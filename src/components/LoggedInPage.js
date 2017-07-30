import React from 'react';
import { withRouter } from 'react-router-dom';
import { CallbackComponent } from 'redux-oidc';
import userManager from '../userManager';

class CallbackPage extends React.Component {
    successCallback = () => {
        this.props.history.push(sessionStorage.redirect || '/');
    }

    render() {
        return (
            <CallbackComponent userManager={userManager} successCallback={this.successCallback} errorCallback={this.successCallback}>
                <div>
                    Redirecting...
                </div>
            </CallbackComponent>
        );
    }
}

export default withRouter(CallbackPage);
