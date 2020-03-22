import axios from 'axios';

import baseRequestConfig from '../assets/config';

export default axios.create({
  ...baseRequestConfig
});
