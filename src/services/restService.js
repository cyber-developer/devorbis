import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'development' ?
  'http://localhost:3000/api/v1' :
  'https://devorbis-api.herokuapp.com/api/v1';

export function post(url, payload) {
  return new Promise(function (resolve, reject) {
    axios.post(BASE_URL + url, payload)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error);
      });
  })  
}

export default {
  post
}
