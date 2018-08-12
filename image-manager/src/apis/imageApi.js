import baseApi from './baseApi';

class ImageApi {
  getImages(start, limit) {
    return baseApi.get(`images?_page=${start}&_limit=${limit}`);
  }

  getImage(id) {
    return baseApi.get(`images/${id}`);
  }
}

export default new ImageApi();
