const expect = require('expect');
const deepfreeze = require('deepfreeze');

const { user, activeTopic, topics, docs } = require('./reducers');



function testUser() {
  // TEST ADDING USER
  let stateBefore = {};
  let action = { type: 'SET_USER', user: { name: 'Johnny' } };
  let stateAfter = { name: 'Johnny' };

  deepfreeze(stateBefore);
  expect(user(stateBefore, action)).toEqual(stateAfter);

  // TEST REMOVING USER
  action = { type: 'REMOVE_USER' };
  expect(user(stateAfter, action)).toEqual(stateBefore);
}


function testActiveTopic() {
  let stateBefore = [];
  let action = { type: 'SET_ACTIVE_TOPIC', topic: 'code' };
  let stateAfter = 'code';

  deepfreeze(stateBefore);
  expect(activeTopic(stateBefore, action)).toEqual(stateAfter);
}


function testTopics() {
  let stateBefore = '';
  let action = { type: 'SET_TOPICS', topics: ['code', 'product', 'general'] };
  let stateAfter = ['code', 'product', 'general'];

  deepfreeze(stateBefore);
  expect(topics(stateBefore, action)).toEqual(stateAfter);
}


function testDocs() {
  let stateBefore = [];
  let action = {
    type: 'SET_DOCS',
    docs: [
      {title: 'Our Mission', text: 'Our mission is...'},
      {title: 'Secret Plan', text: 'Our secret plan is...'},
    ]
  };
  let stateAfter = [
    {title: 'Our Mission', text: 'Our mission is...'},
    {title: 'Secret Plan', text: 'Our secret plan is...'},
  ];

  deepfreeze(stateBefore);
  expect(docs(stateBefore, action)).toEqual(stateAfter);
}


const tests = [testUser, testActiveTopic, testTopics, testDocs];
tests.forEach(test => test());


console.log('All tests passed!');
