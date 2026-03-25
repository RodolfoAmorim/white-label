"use client";

import { MapPinIcon, MenuIcon, SearchIcon, User2Icon } from "lucide-react";
import { Input } from "../form/input";
import Link from "next/link";
import { useBreakpoints } from "@/hooks/use-breakpoints";
import { CurrentCart } from "../shared/current-cart";
import { GlobalSearch } from "../shared/global-search";

export function Header({ name }: { name: string }) {
  const { isMobile, isTablet } = useBreakpoints();

  if (isMobile || isTablet) {
    return (
      <header className="bg-main-600 text-main-50 flex w-full flex-col items-center justify-between gap-6 px-6 pt-8 pb-4">
        <div className="flex w-full items-center justify-between">
          <button>
            <MenuIcon />
          </button>

          <Link href={"/"}>
            <strong className="text-2xl font-black tracking-tighter">
              {name}
            </strong>
          </Link>

          <CurrentCart />
        </div>

        <GlobalSearch />

        <div className="no-scrollbar ml-6 w-[calc(100%+1.5rem)] overflow-x-auto overflow-y-hidden">
          <ul className="divide-main-50/50 text-main-50 flex items-center justify-start divide-x text-xs leading-tight font-medium [&>li]:px-4 [&>li]:first:pl-0 [&>li]:last:pr-6">
            <li>
              <Link href="/">Ofertas</Link>
            </li>
            <li>
              <Link href="/">Cupons</Link>
            </li>
            <li>
              <Link href="/">Moda</Link>
            </li>
            <li>
              <Link href="/">Tecnologia</Link>
            </li>
            <li>
              <Link href="/">Games</Link>
            </li>
            <li>
              <Link href="/">Cozinha</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-main-600 text-main-50 flex w-full flex-col items-center justify-between gap-6 px-6 pt-8 pb-4">
      <div className="container mx-auto flex w-full items-center justify-between gap-10">
        <Link href={"/"}>
          <strong className="text-2xl font-black tracking-tighter">
            {name}
          </strong>
        </Link>

        <div className="flex max-w-35 items-center justify-start gap-2">
          <MapPinIcon />
          <div className="flex-1">
            <small className="-tracking-light text-xs leading-tight font-medium">
              Enviar para
            </small>
            <p className="line-clamp-1 text-sm leading-tight font-bold tracking-tight">
              Rua Santos Silva, 15
            </p>
          </div>
        </div>

        <div className="flex-1">
          <GlobalSearch />
        </div>

        <div className="flex items-center justify-end gap-6">
          <div className="flex items-center justify-end gap-2">
            <p className="leading-tight font-semibold tracking-tight">
              Olá Richard
            </p>

            <span className="bg-main-50 text-main-600 flex rounded-xl p-2">
              <User2Icon />
            </span>
          </div>

          <CurrentCart />
        </div>
      </div>

      <div className="container mx-auto flex w-full items-center justify-between gap-6">
        <ul className="divide-main-50/50 text-main-50 flex items-center justify-start divide-x leading-tight font-medium [&>li]:px-4 [&>li]:first:pl-0 [&>li]:last:pr-6">
          <li>
            <MenuIcon />
          </li>
          <li>
            <Link href="/">Ofertas</Link>
          </li>
          <li>
            <Link href="/">Cupons</Link>
          </li>
          <li>
            <Link href="/">Moda</Link>
          </li>
          <li>
            <Link href="/">Tecnologia</Link>
          </li>
          <li>
            <Link href="/">Games</Link>
          </li>
          <li>
            <Link href="/">Cozinha</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
