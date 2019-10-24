const ENV_CONFIG = {
  LOCAL: {
    REACT_APP_API_BASE_URL: 'api.giphy.com',
    REACT_APP_API_VERSION: 'v1',
    REACT_APP_API_SCHEME: 'http://',
    REACT_APP_FRONTEND_BASE_URL: 'localhost:3000',
  },
};

const currentEnv = (process.env.REACT_APP_ENV ? process.env.REACT_APP_ENV : 'LOCAL');

export default ENV_CONFIG[currentEnv];
