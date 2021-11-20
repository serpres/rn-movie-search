import api from '../api';

import {OMDB_API_KEY, RECOMMENDED_DATA} from '../consts';

export const getById = async id => {
  const params = {
    i: id,
    apiKey: OMDB_API_KEY,
  };
  return api.get('', params);
};

export const getRandomRecommendation = count => {
  const Ids = new Set();
  const promises = [];

  if (count > RECOMMENDED_DATA.length) {
    return;
  }

  while (Ids.size !== count) {
    const randomize = Math.floor(Math.random() * RECOMMENDED_DATA.length);
    Ids.add(RECOMMENDED_DATA[randomize].id);
  }

  Ids.forEach(id => promises.push(getById(id)));

  return Promise.all(promises).then(values => values.map(value => value.data));
};

export const search = async (title, type, year) => {
  const params = {
    s: title,
    type: type,
    y: year,
    apiKey: OMDB_API_KEY,
  };
  return api.get('', params);
};
