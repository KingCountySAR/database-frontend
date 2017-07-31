import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import { withRouter } from 'react-router-dom';

import userManager from '../userManager';

const SelectableList = makeSelectable(List);

class PrimaryNavigation extends React.Component {
    static propTypes = {
        user: PropTypes.object, // TODO replace with actual shape
        isLoadingUser: PropTypes.bool.isRequired,
        history: PropTypes.shape({
            location: PropTypes.string.isRequired,
            search: PropTypes.string.isRequired,
            hash: PropTypes.string.isRequired,
            push: PropTypes.func.isRequired
        }).isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    componentWillReceiveProps(nextProps) {
        this.loginIfNeeded(nextProps);
    }

    onChangeList = (event, value) => {
        this.props.history.push(value);
        this.handleToggle();
    }

    loginIfNeeded({ user, isLoadingUser }) {
        if (!user && !isLoadingUser) {
            const { pathname, search, hash } = this.props.history.location;
            sessionStorage.redirect = `${pathname}${search}${hash}`;
            userManager.signinRedirect();
        }
    }

    handleToggle = () => this.setState({
        open: !this.state.open
    });

    render() {
        return (
            <div>
                <AppBar
                    title="King County Search and Rescue"
                    onTouchTap={this.handleToggle}
                />
                <Drawer
                    open={this.state.open}
                >
                    <AppBar
                        title="Menu"
                        onTouchTap={this.handleToggle}
                        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    />
                    <SelectableList
                        value={window.location.pathname}
                        onChange={this.onChangeList}
                    >
                        <ListItem
                            primaryText="Members"
                            value="/members"
                        />
                        <ListItem
                            primaryText="Missions"
                            value="/missions"
                        />
                        <ListItem
                            primaryText="Training"
                            value="/training"
                        />
                        <ListItem
                            primaryText="Units"
                            value="/units"
                        />
                        <ListItem
                            primaryText="Animals"
                            value="/animals"
                        />
                    </SelectableList>
                </Drawer>
            </div>
        );
    }
}

export default withRouter(PrimaryNavigation);
