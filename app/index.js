import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import jsonApiData from './reducers/jsonApiData';
import AnimalPage from './containers/AnimalPage';
import AnimalsPage from './containers/AnimalsPage';
import MembersPage from './containers/MembersPage';
import MemberPage from './containers/MemberPage';
import PrimaryNavigation from './components/PrimaryNavigation';
import '../scss/global.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const SiteRouter = () => (
    <MuiThemeProvider>
        <BrowserRouter>
            <div>
                <Route path="/" component={PrimaryNavigation} />
                <Route exact path="/members" component={MembersPage} />
                <Route exact path="/members/:memberId" component={MemberPage} />
                <Route exact path="/animals" component={AnimalsPage} />
                <Route exact path="/animals/:memberId" component={AnimalPage} />
            </div>
        </BrowserRouter>
    </MuiThemeProvider>
);

const rootReducer = combineReducers({
    jsonApiData,
});

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer, {}, window.devToolsExtension && window.devToolsExtension());

const App = (
    <Provider store={store}>
        <SiteRouter />
    </Provider>
);


ReactDOM.render(
  App,
  document.getElementById('render-target')
);
