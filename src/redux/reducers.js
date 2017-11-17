const { combineReducers } = require('redux');

function user(state = {}, action) {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    case 'REMOVE_USER':
      return {};
    default:
      return state;
  }
}

function activeTopic(state = 'code', action) {
  switch (action.type) {
    case 'SET_ACTIVE_TOPIC':
      return action.topic;
    default:
      return state;
  }
}

function topics(state = ['all', 'testing', 'general', 'code', 'secret project'], action) {
  switch (action.type) {
    case 'SET_TOPICS':
      return action.topics;
    default:
      return state;
  }
}

function docs(state = [], action) {
  switch (action.type) {
    case 'SET_DOCS':
      return action.docs;
    default:
      return state;
  }
}


const neonApp = combineReducers({
  user,
  topics,
  activeTopic,
  docs,
});

module.exports = { user, activeTopic, topics, docs, neonApp };
