import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { reducer as oidcReducer } from 'redux-oidc';

import loadUser from './loadUser';
import muiTheme from './theme';
import jsonApiData from './reducers/jsonApiData';
import AnimalPage from './containers/AnimalPage';
import AnimalsPage from './containers/AnimalsPage';
import LoggedInPage from './components/LoggedInPage';
import MembersPage from './containers/MembersPage';
import MemberPage from './containers/MemberPage';
import PrimaryNavigation from './containers/PrimaryNavigation';
import registerServiceWorker from './registerServiceWorker';
import userManager from './userManager';
import './index.css';
// import roboto from 'css/roboto/roboto-fontface';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const SiteRouter = () => (
    <MuiThemeProvider muiTheme={muiTheme} >
        <BrowserRouter>
            <Switch>
                <Route path="/loggedIn" component={LoggedInPage} />
                <Route path="/">
                    <div>
                        <Route path="/" component={PrimaryNavigation} />
                        <Route exact path="/members" component={MembersPage} />
                        <Route exact path="/members/:memberId" component={MemberPage} />
                        <Route exact path="/animals" component={AnimalsPage} />
                        <Route exact path="/animals/:memberId" component={AnimalPage} />
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    </MuiThemeProvider>
);

const rootReducer = combineReducers({
    oidc: oidcReducer,
    jsonApiData,
});

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(
    rootReducer,
    {},
    window.devToolsExtension && window.devToolsExtension()
);
loadUser(store, userManager);

const App = (
    <Provider store={store}>
        <SiteRouter />
    </Provider>
);


ReactDOM.render(
  App,
  document.getElementById('render-target')
);
registerServiceWorker();
