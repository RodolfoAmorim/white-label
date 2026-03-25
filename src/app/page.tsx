import { Carousel } from "@/components/shared/carousel";
import { ProductCard } from "@/components/shared/product-card";
import { HomeBanners } from "@/features/home/home-banners";
import { HomeFilters } from "@/features/home/home-filters";
import { getHostConfig } from "@/services/host-service";
import { HomeIcon } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const headerList = await headers();
  const hostName = headerList.get("x-host-name") || "";
  const host = await getHostConfig(hostName);

  return (
    <main className="w-full flex-1 bg-gray-100">
      <HomeBanners banners={host.assets.banners.home} />

      <section className="relative z-10 container mx-auto my-6 px-6">
        <div className="flex w-full flex-col flex-wrap items-start justify-start gap-4 md:flex-row xl:-mt-20 xl:items-stretch">
          <div className="card w-full xl:max-w-157">
            <h3>Continue de onde parou</h3>

            <Carousel autoWidth loop={false}>
              <ProductCard layout="medium" />
              <ProductCard layout="medium" />
              <ProductCard layout="medium" />
              <ProductCard layout="medium" />
              <ProductCard layout="medium" />
              <ProductCard layout="medium" />
            </Carousel>
          </div>

          <div className="card w-full md:w-auto md:flex-1">
            <h3>Melhores ofertas</h3>

            <div className="grid w-full grid-cols-2 gap-4 xl:flex-1">
              {Array.from({ length: 4 }).map((_, index) => (
                <ProductCard key={index} layout="small" />
              ))}
            </div>
          </div>

          <div className="card w-full md:w-auto md:flex-1">
            <h3>Pensados para você</h3>

            <div className="grid w-full grid-cols-2 gap-4 xl:flex-1">
              {Array.from({ length: 4 }).map((_, index) => (
                <ProductCard key={index} layout="small" />
              ))}
            </div>
          </div>
        </div>

        <div className="card mt-4 w-full xl:mt-10">
          <div className="flex w-full items-start justify-between gap-4">
            <h3 className="flex-1">Relacionados ao que você viu</h3>
            <Link href={"/"} className="see-more">
              ver mais
            </Link>
          </div>

          <Carousel autoWidth loop={false}>
            <ProductCard layout="medium" />
            <ProductCard layout="medium" />
            <ProductCard layout="medium" />
            <ProductCard layout="medium" />
            <ProductCard layout="medium" />
            <ProductCard layout="medium" />
            <ProductCard layout="medium" />
          </Carousel>
        </div>

        <HomeFilters />

        <div className="w-full space-y-4 xl:space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="flex-1 text-lg leading-tight font-bold tracking-tight text-gray-800 xl:text-2xl">
              Mais Procurados
            </h3>

            <Link href={"/"} className="see-more">
              ver mais
            </Link>
          </div>

          <div className="w-full space-y-4">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {Array.from({ length: 12 }).map((_, index) => (
                <ProductCard key={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="card mt-4 w-full xl:mt-10">
          <div className="flex w-full items-start justify-between gap-4">
            <h3 className="flex-1">Últimos visitados</h3>
            <Link href={"/"} className="see-more">
              ver mais
            </Link>
          </div>

          <Carousel autoWidth loop={false}>
            <ProductCard layout="medium" />
            <ProductCard layout="medium" />
            <ProductCard layout="medium" />
            <ProductCard layout="medium" />
            <ProductCard layout="medium" />
            <ProductCard layout="medium" />
            <ProductCard layout="medium" />
          </Carousel>
        </div>
      </section>
    </main>
  );
}
