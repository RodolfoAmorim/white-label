"use client";

import { Carousel } from "@/components/shared/carousel";
import { useBreakpoints } from "@/hooks/use-breakpoints";
import { HomeIcon } from "lucide-react";

export function HomeFilters() {
  const { isMobile, isTablet } = useBreakpoints();

  if (isMobile || isTablet) {
    return (
      <div className="w-full py-10 xl:py-14">
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              className="bg-main-700 text-main-50 flex h-22 w-full flex-col items-center justify-center gap-2 rounded-2xl p-2"
              key={index}
            >
              <HomeIcon className="size-8" strokeWidth={2} />
              <p className="text-xxs leading-tighter font-bold tracking-tight uppercase">
                Casa
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-10 xl:py-14">
      <Carousel autoWidth loop={false} navigation>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            className="bg-main-700 text-main-50 flex h-22 w-full items-center justify-center gap-2 rounded-2xl p-4"
            key={index}
          >
            <HomeIcon className="size-8" strokeWidth={2} />
            <p className="leading-tighter text-base font-bold tracking-tight uppercase">
              Computadores
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
