import { Carousel } from "@/components/shared/carousel";
import Image from "next/image";

export function HomeBanners({ banners }: Readonly<{ banners: string[] }>) {
  return (
    <div className="bg-main-700 relative z-0 w-full">
      <Carousel
        itemsPerView={{ mobile: 1, tablet: 1, desktop: 1 }}
        autoplay={true}
      >
        {banners.map((banner, i) => (
          <Image
            key={i}
            src={banner}
            alt=""
            width={1440}
            height={415}
            className="w-full"
          />
        ))}
      </Carousel>
    </div>
  );
}
