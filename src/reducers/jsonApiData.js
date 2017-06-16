import { handleActions } from 'redux-actions';

export default handleActions({
    RECEIVE_JSON_API_DATA: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    REQUEST_JSON_API_DATA: state => (state),
}, {
    animals: [],
    members: [],
});
