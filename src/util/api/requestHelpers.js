import { getAccessToken } from '../auth/AuthService';

const baseUrl = 'http://localhost:1337';

function get(path, callback) {
  let headers = new Headers({
    Authorization: `Bearer ${getAccessToken()}`
  });

  let init = { method: 'GET',
               headers: headers,
               mode: 'cors' };

  fetch(`${baseUrl}${path}`, init)
    .then(result => {
      return result.json();
    })
    .then(result => {
      if (callback) callback(result);
    })
    .catch(error => {
      console.error(error);
    })
}


function post(path, body, callback) {
  let headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getAccessToken()}`
  });

  let init = { method: 'POST',
                mode: 'cors',
                headers: headers,
                body: JSON.stringify(body)
              };

  fetch(`${baseUrl}${path}`, init)
    .then(result => {
      return result.json();
    })
    .then(result => {
      if (callback) callback(result);
    })
    .catch(error => {
      console.error(error);
    })
}


function patch(path, body, callback) {
  let init = { method: 'PATCH',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
              };

  fetch(`${baseUrl}${path}`, init)
    .then(result => {
      return result.json();
    })
    .then(result => {
      if (callback) callback(result);
    })
    .catch(error => {
      console.error(error);
    })
}

function destroy(path, callback) {
  let init = { method: 'DELETE',
                mode: 'cors',
              };

  fetch(`${baseUrl}${path}`, init)
    .then(result => {
      return result.json();
    })
    .then(result => {
      if (callback) callback(result);
    })
    .catch(error => {
      console.error(error);
    })
}



export { get, post, patch, destroy };
