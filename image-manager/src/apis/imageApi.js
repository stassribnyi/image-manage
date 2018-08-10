import baseApi from './baseApi';

class ImageApi {
  getImages(start, limit) {
    return baseApi.get(`images?_start=${start}&_limit=${limit}`);
  }
}

export default new ImageApi();
