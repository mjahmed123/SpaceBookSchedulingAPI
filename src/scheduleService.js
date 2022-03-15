const axios = require('axios');

const API_URL = 'http://localhost:3333/api/1.0.0';

module.exports = {
  createPost(userId, text, token) {
    return axios.post(`${API_URL}/user/${userId}/post`, { text }, {
      headers: {
        'X-Authorization': token,
      },
    })
      .then((result) => result.data);
  },
};
