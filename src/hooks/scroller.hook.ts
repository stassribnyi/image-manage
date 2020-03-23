import { useEffect, useRef } from 'react';
import SweetScroll, { PartialOptions } from 'sweet-scroll';

const DEFAULT_SCROLL_CONFIG: PartialOptions = {
  easing: 'easeInOutSine'
};

export const useScroller = (config?: PartialOptions): SweetScroll | null => {
  const scrollerRef = useRef<SweetScroll | null>(null);

  useEffect(() => {
    scrollerRef.current = new SweetScroll({
      ...DEFAULT_SCROLL_CONFIG,
      ...config
    });

    return () => {
      scrollerRef.current?.destroy();
    };
  }, [scrollerRef, config]);

  return scrollerRef.current;
};
