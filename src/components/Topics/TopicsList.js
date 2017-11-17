import React from 'react';

import './Topics.css'

const TopicsList = ({ topics, activeTopic, setActiveTopic }) => {
  return (
    <div className='topics-container'>
      <ul className='topics-list'>
        { topics.map(topic => {
          let classes = topic === activeTopic ? 'topic active-topic' : 'topic';
          return (
            <li
              key={topic}
              className={classes}
              onClick={() => setActiveTopic(topic)}
            >
              {topic}
            </li>
          )
        })}
      </ul>
    </div>
  )
}


export default TopicsList;
