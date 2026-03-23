"use client";

import { ReactNode, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface CarouselProps {
  children: ReactNode[];
  itemsPerView?: {
    mobile: number;
    desktop: number;
    tablet: number;
  };
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  navigation?: boolean;
  autoWidth?: boolean;
}

export function Carousel({
  children,
  itemsPerView = { mobile: 1, desktop: 1, tablet: 1 },
  autoplay = false,
  autoplayDelay = 4000,
  loop = true,
  navigation = false,
  autoWidth = false,
}: CarouselProps) {
  const plugins = autoplay
    ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]
    : [];
  const [emblaRef, emblaAPi] = useEmblaCarousel({ loop }, plugins);

  const scrollPrev = useCallback(() => {
    emblaAPi?.scrollPrev();
  }, [emblaAPi]);
  const scrollNext = useCallback(() => {
    emblaAPi?.scrollNext();
  }, [emblaAPi]);

  return (
    <div
      className="group relative w-full"
      style={{
        // @ts-ignore
        "--items-mobile": itemsPerView.mobile,
        "--items-tablet": itemsPerView.tablet,
        "--items-desktop": itemsPerView.desktop,
      }}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {children.map((child, index) => (
            <div
              key={index}
              className={`min-w-0 ${
                autoWidth
                  ? "flex-[0_0_auto] pl-4"
                  : "flex-[0_0_calc(100%/var(--items-mobile))] sm:flex-[0_0_calc(100%/var(--items-tablet))] lg:flex-[0_0_calc(100%/var(--items-desktop))]"
              }`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {navigation && (
        <>
          <button
            onClick={scrollPrev}
            aria-label="Anterior"
            className="text-main-500 absolute top-1/2 left-4 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-xl bg-white opacity-100 shadow-md transition-all"
          >
            <ChevronLeftIcon size={24} />
          </button>

          <button
            onClick={scrollNext}
            aria-label="Próximo"
            className="text-main-500 absolute top-1/2 right-4 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-xl bg-white opacity-100 shadow-md transition-all"
          >
            <ChevronRightIcon size={24} />
          </button>
        </>
      )}
    </div>
  );
}
