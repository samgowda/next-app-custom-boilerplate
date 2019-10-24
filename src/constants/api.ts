import ENV_CONFIG from '../constants/env';

const API = {
  routes: {
    locations: '/locations/search',
  },
};

const ENV = {
  url: `${ENV_CONFIG.REACT_APP_API_BASE_URL}/${ENV_CONFIG.REACT_APP_API_VERSION}`,
  scheme: ENV_CONFIG.REACT_APP_API_SCHEME,
};

export default Object.assign({}, API, ENV);
