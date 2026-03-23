import { Carousel } from "@/components/shared/carousel";
import { ProductCard } from "@/components/shared/product-card";
import { HomeBanners } from "@/features/home/home-banners";
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

      <section className="container mx-auto my-6 px-6">
        <div className="flex w-full flex-col items-start justify-start gap-4">
          <div className="card">
            <h3>Continue de onde parou</h3>

            <Carousel autoWidth loop={false}>
              <ProductCard layout="medium" />
              <ProductCard layout="medium" />
              <ProductCard layout="medium" />
              <ProductCard layout="medium" />
            </Carousel>
          </div>

          <div className="card">
            <h3>Melhores ofertas</h3>

            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <ProductCard key={index} layout="small" />
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Pensados para você</h3>

            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <ProductCard key={index} layout="small" />
              ))}
            </div>
          </div>
        </div>

        <div className="card mt-4 w-full">
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

        <div className="w-full py-10">
          {/* <Carousel autoWidth loop={false} navigation>
            {Array.from({ length: 10 }).map((_, index) => (
              <div>
                <HomeIcon />
                <p>Casa</p>          
              </div>
            ))}
          </Carousel> */}
          <div className="grid w-full grid-cols-2 gap-4">
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

        <div className="w-full space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h3 className="flex-1 text-lg leading-tight font-bold tracking-tight text-gray-800">
              Mais Procurados
            </h3>

            <Link href={"/"} className="see-more">
              ver mais
            </Link>
          </div>

          <div className="w-full space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 12 }).map((_, index) => (
                <ProductCard key={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="card mt-4 w-full">
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
