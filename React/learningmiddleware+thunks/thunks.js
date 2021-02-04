// middleware/thunk_middleware.js

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
};

export default thunk;


// utils/contacts_api_util.js

export const fetchContacts = () => $.ajax({ url: 'api/contacts' });

import * as ContactAPIUtil from '../utils/contacts_api_util';

//action creator which returns an object
export const receiveContacts = contacts => ({
  type: RECEIVE_CONTACTS,
  contacts
});

// async action creator which returns a function
export const fetchContacts = () => dispatch => (
  ContactAPIUtil.fetchContacts().then(contacts => dispatch(receiveContacts(contacts)));
);