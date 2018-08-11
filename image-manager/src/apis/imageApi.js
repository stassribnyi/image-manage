import baseApi from './baseApi';

class ImageApi {
  getImages(start, limit) {
    return baseApi.get(`images?_page=${start}&_limit=${limit}`);
  }
}

export default new ImageApi();
