import React, { createContext, useContext, useState } from 'react';

import { Image, imageProvider } from '../../providers';

const IMAGES_PER_PAGE = 10;

export interface ImageContextState {
  readonly hasMore: boolean;
  readonly images: Array<Image>;
  readonly loadPage: (pageNumber: number) => Promise<void>;
}

export const ImageContext = createContext<ImageContextState>(
  {} as ImageContextState
);

export const ImageProvider: React.FC = ({ children }) => {
  const [{ hasMore, images }, setState] = useState<
    Omit<ImageContextState, 'loadPage'>
  >({
    images: [],
    hasMore: true
  });

  const loadPage = async (pageNumber: number): Promise<void> => {
    const pageImages = await imageProvider.getImages(
      pageNumber,
      IMAGES_PER_PAGE
    );

    if (!pageImages.length) {
      setState(oldState => ({ ...oldState, hasMore: false }));

      return;
    }

    setState(({ images, ...restState }) => ({
      ...restState,
      images: [...images, ...pageImages],
      hasMore: pageImages.length === IMAGES_PER_PAGE
    }));
  };

  const context = {
    images,
    hasMore,
    loadPage
  };

  return (
    <ImageContext.Provider value={context}>{children}</ImageContext.Provider>
  );
};

export const useImageContext = (): ImageContextState =>
  useContext(ImageContext);
