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
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }).isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    componentWillMount() {
        const { user } = this.props;
        console.log('user is', user);
        // Currently this redirect takes us to a dead end:
        // ("The client application is not known or is not authorized.")
        // if (!user) {
        //     userManager.signinRedirect();
        // }
    }

    onChangeList = (event, value) => {
        this.props.history.push(value);
        this.handleToggle();
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
