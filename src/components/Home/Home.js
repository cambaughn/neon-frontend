import React from 'react';

import Dashboard from '../Dashboard/Dashboard';
import './Home.css';

import { isLoggedIn } from '../../util/auth/AuthService';

const Home = () => {
  return (
    <div className={'home-container'}>
      { isLoggedIn() ? (
        <Dashboard />
      ) : (
        <div>
          <h2>Welcome</h2>
          <h3>Neon is the best way for you and your team to create and share your ideas</h3>
        </div>
      )}
    </div>
  )
}


export default Home;
