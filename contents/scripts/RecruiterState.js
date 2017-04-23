import querystring from 'querystring';

export function fromQuery(query) {
    const items = querystring.parse(query.split('?')[1]);
    const visible = new Set(JSON.parse(atob(items['i'])));

    return {'visible': visible };
}
