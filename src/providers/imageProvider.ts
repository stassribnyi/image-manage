import { AxiosInstance } from 'axios';

import axiosProvider from './axiosProvider';

export interface Image {
  readonly id: number;
  readonly url: string;
  readonly tooltip: string;
  readonly showTooltip: boolean;
}

export class ImageProvider {
  constructor(private readonly api: AxiosInstance) {}

  getImages = async (start: number, limit: number): Promise<Array<Image>> => {
    const { data } = await this.api.get<Array<Image>>(
      `images?_page=${start}&_limit=${limit}`
    );

    return data;
  };

  addImage = async (imageToAdd: Image): Promise<Image> => {
    const { data: addedImage } = await this.api.post<Image>(
      'images',
      imageToAdd
    );

    return addedImage;
  };

  updateImage = async (imageToUpdate: Image): Promise<Image> => {
    const { data: updatedImage } = await this.api.put<Image>(
      `images/${imageToUpdate.id}`,
      imageToUpdate
    );

    return updatedImage;
  };

  getImage = async (id: Image['id']): Promise<Image> => {
    const { data: image } = await this.api.get<Image>(`images/${id}`);

    return image;
  };

  deleteImage = async (id: Image['id']): Promise<void> => {
    await this.api.delete(`images/${id}`);
  };
}

export default new ImageProvider(axiosProvider);
