import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopicsList from './TopicsList';
import { setTopics, setActiveTopic } from '../../redux/actionCreators';

class TopicsContainer extends Component {
  render() {
    return (
        <TopicsList
          topics={this.props.topics}
          activeTopic={this.props.activeTopic}
          setActiveTopic={this.props.setActiveTopic}
        />
    )
  }
}


const mapStateToProps = state => {
  return {
    topics: state.topics,
    activeTopic: state.activeTopic
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTopics: topics => dispatch(setTopics(topics)),
    setActiveTopic: topic => dispatch(setActiveTopic(topic)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsContainer);
