import axios from 'axios';

import {OMDB_API_KEY} from '../consts';

const config = {
  baseURL: 'http://www.omdbapi.com/',
};

class Axios {
  constructor() {
    this._axios = axios.create(config);
    this._axios.defaults.params = {};
    this._axios.defaults.params['apiKey'] = OMDB_API_KEY;
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
