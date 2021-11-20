import axios from 'axios';

const config = {
  baseURL: 'http://www.omdbapi.com/',
};

class Axios {
  constructor() {
    this._axios = axios.create(config);
  }

  get(url, params = {}, requestConfig = {}) {
    return this._axios({
      method: 'get',
      url,
      params,
      ...requestConfig,
    });
  }
}

export default new Axios();
