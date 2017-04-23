import querystring from 'querystring';

export function fromQuery(query) {
    const items = querystring.parse(query.split('?')[1]);
    const visible = new Set(JSON.parse(atob(items['i'])));

    const enabled = new Set();

    for(const key in items) {
      if(items[key] == 'y') {
        enabled.add(key);
      }
    }

    return {'visible': visible, 'enabled': enabled };
}

export function setEnabled(state, key, value) {
  if(value) {
    state.enabled.add(key);
  }
  else {
    state.enabled.delete(key);
  }
  return state;
}

export function toQuery(state) {
  const map = new Map();
  for(const key of state.enabled) {
    map[key] = 'y';
  }
  map['i'] = btoa(JSON.stringify(Array.from(state.enabled)));
  return querystring.stringify(map);
}
