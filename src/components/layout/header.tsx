import { MenuIcon, ShoppingBagIcon, SearchIcon } from "lucide-react";
import { Input } from "../form/input";
import Link from "next/link";

export function Header({ name }: { name: string }) {
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

        <button className="relative">
          <span className="bg-main-100 text-main-500 absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold">
            3
          </span>

          <ShoppingBagIcon />
        </button>
      </div>

      <Input.Root>
        <Input.Icon icon={SearchIcon} />
        <Input.Field placeholder="Buscar produtos, marcas..." />
      </Input.Root>

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
