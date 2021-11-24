import api from '../api';

import {RECOMMENDED_DATA} from '../consts';

export const getById = id => {
  const params = {
    i: id,
  };
  return api.get('', params);
};

export const getRandomRecommendation = count => {
  const ids = new Set();
  const promises = [];

  if (count >= RECOMMENDED_DATA.length) {
    RECOMMENDED_DATA.forEach(item => promises.push(getById(item.id)));
  }

  while (ids.size !== count) {
    const randomize = Math.floor(Math.random() * RECOMMENDED_DATA.length);
    ids.add(RECOMMENDED_DATA[randomize].id);
  }

  ids.forEach(id => promises.push(getById(id)));

  return Promise.all(promises).then(values => values.map(value => value.data));
};

export const search = async (title, type, year) => {
  const params = {
    s: title,
    type: type,
    y: year,
  };

  return api.get('', params);
};
