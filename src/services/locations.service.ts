// Config
import API from '../constants/api';
// Generic Service
import httpService from './generic.service';

/**
 * Sample API Call
 */

export const fetchLocations = () => {
    return httpService({
      method: 'GET',
      url: `${API.scheme}${API.url}${API.routes.locations}&${process.env.API_KEY}`,
      headers: {},
    });
  };
