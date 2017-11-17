
function setUser(user) {
  return {
    type: 'SET_USER',
    user
  }
}

function removeUser() {
  return {
    type: 'REMOVE_USER'
  }
}

function setTopics(topics) {
  return {
    type: 'SET_TOPICS',
    topics
  }
}

function setActiveTopic(topic) {
  return {
    type: 'SET_ACTIVE_TOPIC',
    topic
  }
}


export { setUser, removeUser, setTopics, setActiveTopic };
