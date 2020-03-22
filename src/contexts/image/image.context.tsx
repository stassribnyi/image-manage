import React, { createContext, useContext, useEffect, useState } from 'react';

import { Image, imageProvider } from '../../providers';

export interface ImageContextState {
  readonly images: Array<Image>;
}

export const ImageContext = createContext<ImageContextState>(
  {} as ImageContextState
);

export const ImageProvider: React.FC = ({ children }) => {
  const [images, setImages] = useState<Array<Image>>([]);

  const context = {
    images
  };

  useEffect(() => {
    imageProvider.getImages(0, 100).then(images => setImages(images));
  }, []);

  return (
    <ImageContext.Provider value={context}>{children}</ImageContext.Provider>
  );
};

export const useImageContext = (): ImageContextState =>
  useContext(ImageContext);
