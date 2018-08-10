import baseApi from './baseApi';

class ImageApi {
  getImages() {
    return baseApi.get('images');
  }
}

export default new ImageApi();
